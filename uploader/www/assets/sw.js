addEventListener('notificationclick', ev => {
    ev.notification.close(); // 알림 닫기
    // 웹 페이지에 메시지 보내기
    ev.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
            clients.forEach(client => {
                client.focus();
                client.postMessage({ type: 'notificationclick', action: ev.action, data: ev.notification.data, id: ev.notification.tag, reply: ev.reply });
            });
        })
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
    });
});