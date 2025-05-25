addEventListener('notificationclick', ev => {
    ev.notification.close(); // 알림 닫기
    // 웹 페이지에 메시지 보내기
    ev.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
            clients.forEach(client => {
                client.focus();
                client.postMessage({ type: 'notificationclick', data: ev.notification.tag, reply: ev.reply });
            });
        })
    );
});

self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        badge: `https://is2you2.github.io/pjcone_pwa/assets/badge/${data.icon || 'favicon'}.png`,
        icon: `https://is2you2.github.io/pjcone_pwa/assets/icon/${data.icon || 'favicon'}.png`,
        image: data.image,
        tag: `${data.id}`,
    });
});