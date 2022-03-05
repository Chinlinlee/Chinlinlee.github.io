function addCopyBtnToCodeBlock() {
    let codeBlocks = document.querySelectorAll("pre.Code");
    for(let codeBlock of codeBlocks) {
        let copyButton = document.createElement("button");
        copyButton.classList.add("code-copy-btn");
        copyButton.innerText = "Copy";
        let codeTag = codeBlock.querySelector("code");
        copyButton.addEventListener("click", function(e) {
            navigator.clipboard.writeText(codeTag.textContent).then(()=> {
                clearToastBottom();
                toastBottomShow("Copied code to clipboard");
                setTimeout(function() {
                    clearToastBottom();
                }, 1500);
            });
        });
        codeBlock.prepend(copyButton);
    }
}

function clearToastBottom() {
    document.querySelectorAll(".toast-bottom").forEach(e => e.remove());
}

function toastBottomShow(str) {
    let toastDiv = document.createElement("div");
    toastDiv.classList.add("toast-bottom");
    let toastContent = document.createElement("div");
    toastContent.classList.add("toast-bottom-content");
    toastContent.innerText = str;
    toastDiv.appendChild(toastContent);
    document.body.append(toastDiv);
}
addCopyBtnToCodeBlock();