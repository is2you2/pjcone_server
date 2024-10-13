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