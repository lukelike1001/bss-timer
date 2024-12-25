const alarmKeys = ["timer", "isRunning", "timeOption", "message"];
const buttonKeys = ["ladybug", "rhino_beetle", "scorpion", "mantis", "spider", "werewolf"];
for (const key of buttonKeys) {
    chrome.alarms.create(key, { periodInMinutes: 1 / 60 });
}

chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.storage.local.get(alarmKeys).then((res) => {
        if (res.isRunning) {
            let timer = res.timer + 1;
            let isRunning = res.isRunning;
            if (timer === res.timeOption * 60) {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: '../images/basic_bee.png',
                    title: 'Time\'s up! ⌛',
                    message: res.message
                });
                timer = 0;
                isRunning = false;
            }
            chrome.storage.local.set({
                timer,
                isRunning,
            });
        }
    });
});

chrome.storage.local.get(alarmKeys).then((res) => {
    chrome.storage.local.set({
        timer: res.timer ?? 0,
        timeOption: res.timeOption ?? 25,
        isRunning: res.isRunning ?? false,
    });
});
