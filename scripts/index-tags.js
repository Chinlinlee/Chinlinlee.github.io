document.addEventListener("readystatechange", function () {
    if (this.readyState === "complete") {
        let tagsElementList = document.querySelectorAll(".DateTagBar__Tag");
        let distinctTagsName = [];
        let distinctTags = [];
        for(let tagElement of tagsElementList) {
            let tagName = tagElement.innerText;
            if (!distinctTagsName.includes(tagName)) {
                distinctTagsName.push(tagName);
                distinctTags.push(tagElement);
            }
        }
        let tagSummaryBlock = document.querySelector("#tags-summary");
        let tagContent = tagSummaryBlock.querySelector(".Toggle__Content #tags-list");
        for (let distinctTagElement of distinctTags) {
            tagContent.appendChild(distinctTagElement.cloneNode(true));
        }
    }
});