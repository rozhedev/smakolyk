import { TEXT_CONTENT, CLASS_LIST, STATE_LIST } from '../values';

const vacancyCards = document.querySelectorAll(`.${CLASS_LIST.vacancyCard}`);
let initialValue = 3;
let currentItems = 3;

if (vacancyCards) {
    vacancyCards.forEach((item) => {
        // * Show or hide all list items after page load

        currentItems = initialValue;
        let itemsList = item.querySelectorAll(`.${CLASS_LIST.vacancyCardListItem}`);

        for (let i = 0; i < currentItems; i++) {
            itemsList[i].classList.add(STATE_LIST.show);
        }
        for (let i = currentItems; currentItems++ < itemsList.length; i++) {
            itemsList[i].classList.add(STATE_LIST.hide);
        }

        // * Event on current item
        item.addEventListener("click", function (e) {
            let target = e.target;

            if (target.classList.contains(CLASS_LIST.loadmoreBtn)) {
                const loadmoreItem = item.querySelector(
                    `.${CLASS_LIST.loadmoreBtn}`
                );
                const showItemsList = item.querySelectorAll(
                    `.${CLASS_LIST.vacancyCardListItem}.${STATE_LIST.show}`
                );
                let loadItemsCount = item.querySelectorAll(
                    `.${CLASS_LIST.vacancyCardListItem}.${STATE_LIST.show}`
                ).length;

                if (showItemsList.length != itemsList.length) {
                    // * Load items when click
                    for (let k = showItemsList.length; k < showItemsList.length + loadItemsCount; k++) {
                        if (itemsList[k]) {
                            itemsList[k].classList.add(STATE_LIST.show);
                            itemsList[k].classList.remove(STATE_LIST.hide);

                        } else loadmoreItem.textContent = TEXT_CONTENT.btnHide;
                    }
                    currentItems += loadItemsCount;

                } else {
                    // * Hide items when click
                    currentItems = initialValue;
                    for (let j = showItemsList.length - 1; j >= currentItems; j--) {
                        itemsList[j].classList.add(STATE_LIST.hide);
                        itemsList[j].classList.remove(STATE_LIST.show);
                        loadmoreItem.textContent = TEXT_CONTENT.btnShow;
                    }
                }
            }
        });
    })
}
