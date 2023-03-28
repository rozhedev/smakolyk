import { TEXT_CONTENT, CLASS_LIST, STATE_LIST } from "../values";

const ReadMore = (() => {
    let s;

    return {

        settings() {
            return {
                content: document.querySelectorAll(".news-card__descr"),
                originalContentArr: [],
                truncatedContentArr: [],
                moreLink: "Читати далі...",
                lessLink: "Згорнути",
            }
        },

        init() {
            s = this.settings();
            this.bindEvents();
        },

        bindEvents() {
            ReadMore.truncateText();
        },

        countWords(str) {
            return str.split(/\s+/).length;
        },

        ellipseContent(str, wordsNum) {
            return str.split(/\s+/).slice(0, wordsNum).join(" ") + "...";
        },

        truncateText() {

            for (let i = 0; i < s.content.length; i++) {
                const originalContent = s.content[i].innerHTML;
                const numberOfWords = s.content[i].dataset.rmWords;
                const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
                const originalContentWords = ReadMore.countWords(originalContent);

                s.originalContentArr.push(originalContent);
                s.truncatedContentArr.push(truncateContent);

                if (numberOfWords < originalContentWords) {
                    s.content[i].innerHTML = s.truncatedContentArr[i];
                    let self = i;
                    ReadMore.createLink(self)
                }
            }
            ReadMore.handleClick(s.content);
        },

        createLink(index) {
            const linkWrap = document.createElement("button");

            linkWrap.className = "link loadmore";

            linkWrap.innerHTML = `<a id="read-more_${index}" class="comments-item__btn" style="cursor:pointer;">${s.moreLink}</a>`;

            s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);

        },

        handleClick(el) {
            const readMoreLink = document.querySelectorAll(".comments-item__btn");

            for (let j = 0, l = readMoreLink.length; j < l; j++) {

                readMoreLink[j].addEventListener("click", function () {

                    const moreLinkID = this.getAttribute("id");
                    let index = moreLinkID.split("_")[1];

                    el[index].classList.toggle("is-expanded");

                    if (this.dataset.clicked !== "true") {
                        el[index].innerHTML = s.originalContentArr[index];
                        this.innerHTML = s.lessLink;
                        this.dataset.clicked = true;
                    } else {
                        el[index].innerHTML = s.truncatedContentArr[index];
                        this.innerHTML = s.moreLink;
                        this.dataset.clicked = false;
                    }
                });
            }
        },
    }
})();

ReadMore.init()