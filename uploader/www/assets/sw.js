addEventListener('notificationclick', ev => {
    ev.notification.close();

    let targetUrl = ev.notification.data?.data?.url || '/';

    ev.waitUntil(
        (async () => {
            const allClients = await clients.matchAll({
                type: 'window',
                includeUncontrolled: true,
            });

            // 이미 같은 사이트가 열려 있다면 그 탭을 포커스
            for (const client of allClients) {
                if (client.url.includes(self.location.origin)) {
                    client.focus();
                    client.postMessage({ type: 'notificationclick', action: ev.action, data: ev.notification.data, id: ev.notification.tag, reply: ev.reply });
                    return;
                }
            }
            console.log(self.registration.scope, '/', self.registration.scope.includes('/pjcone_pwa/'));
            // scope 검토 후 시작부 변경하기
            if (self.registration.scope.includes('/pjcone_pwa/'))
                targetUrl = '/pjcone_pwa' + targetUrl;
            // 아니면 새 창 열기
            console.log(targetUrl);
            await clients.openWindow(targetUrl);
        })()
    );
});

self.addEventListener('push', e => {
    const data = e.data.json();
    // 알림 지우기
    if (data.icon == 'remove') {
        self.registration.getNotifications({ tag: `${data.id}` }).then(notifications => {
            notifications.forEach(n => n.close());
        });
        // 알림 생성하기
    } else self.registration.showNotification(data.title, {
        body: data.body,
        badge: `https://is2you2.github.io/pjcone_pwa/assets/badge/${data.icon || 'favicon'}.png`,
        icon: `https://is2you2.github.io/pjcone_pwa/assets/icon/${data.icon || 'favicon'}.png`,
        image: data.image,
        tag: `${data.id}`,
        data: data,
    });
});