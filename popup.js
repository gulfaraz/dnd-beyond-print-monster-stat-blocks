const toggle = document.getElementById("toggle");

chrome.storage.sync.get({ checked: false }, ({ checked }) => {
    toggle.checked = checked;
    toggleClass(checked);
});

toggle.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: toggleClass,
        args: [toggle.checked],
    });
});

function toggleClass(checked) {
    if (checked) {
        document.body.classList.add("dnd-hide");
    } else {
        document.body.classList.remove("dnd-hide");
    }

    chrome.storage.sync.set({ checked });
}
