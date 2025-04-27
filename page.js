chrome.storage.sync.get({ checked: false }, ({ checked }) => {
    if (checked) {
        document.body.classList.add("dnd-hide");
    } else {
        document.body.classList.remove("dnd-hide");
    }
});
