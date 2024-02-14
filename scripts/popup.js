document.addEventListener('DOMContentLoaded', function () {
    var targetButton = document.getElementById('ladybug');
    targetButton.addEventListener('click', function () {
        setTimeout(showNotification, 2000);
    });
});

function showNotification() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: '../images/basic_bee.png',
        title: 'Time\'s up! ⌛',
        message: 'The ladybugs have respawned! 🔴'
    });
}
  