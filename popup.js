let lastDateCheck = null;

chrome.runtime.onInstalled.addListener(() => {
    // Initial check on extension install
    checkDateChange();
});

function checkDateChange() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    if (lastDateCheck === null || currentDay !== lastDateCheck) {
        lastDateCheck = currentDay;
        // Set timeout to trigger popup after a short delay
        setTimeout(() => {
            chrome.action.openPopup();
        }, 2000); // Delay of 2 seconds
    }
}