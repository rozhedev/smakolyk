import { TEXT_CONTENT, CLASS_LIST, STATE_LIST } from '../values';

const vacancyCards = document.querySelectorAll(`.${CLASS_LIST.vacancyCard}`);
const navInners = document.querySelectorAll(`.book-nav__inner`);
let initialCountVacancy = 3;
let loadCountVacancy = 3;
let initialCountNav = 8;
let loadCountNav = 4;

function showItems(wrapper, itemListClass, initialCount, loadCount) {
    let tempCount = loadCount;
    if (wrapper) {
        wrapper.forEach((item) => {
            // * Show or hide all list items after page load
            loadCount = tempCount;
            let itemsList = item.querySelectorAll(`.${itemListClass}`);

            for (let i = 0; i < initialCount; i++) {
                itemsList[i].classList.add(STATE_LIST.show);
            }
            for (let i = initialCount; i < itemsList.length; i++) {
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
                        `.${itemListClass}.${STATE_LIST.show}`
                    );
                    let loadItemsCount = item.querySelectorAll(
                        `.${itemListClass}.${STATE_LIST.show}`
                    ).length;

                    if (showItemsList.length != itemsList.length) {
                        // * Load items when click
                        loadItemsCount = tempCount;
                        for (let k = showItemsList.length; k < showItemsList.length + loadItemsCount; k++) {
                            if (itemsList[k]) {
                                itemsList[k].classList.add(STATE_LIST.show);
                                itemsList[k].classList.remove(STATE_LIST.hide);

                            } else loadmoreItem.innerHTML = TEXT_CONTENT.btnHide;
                        }
                    } else {
                        // * Hide items when click
                        loadCount = initialCount;
                        for (let j = showItemsList.length - 1; j >= loadCount; j--) {
                            itemsList[j].classList.add(STATE_LIST.hide);
                            itemsList[j].classList.remove(STATE_LIST.show);
                            loadmoreItem.innerHTML = TEXT_CONTENT.btnShow;
                        }
                    }
                }
            });
        })
    }
}

if (vacancyCards) {
    showItems(vacancyCards, CLASS_LIST.vacancyCardListItem, initialCountVacancy, loadCountVacancy);
}

if (navInners) {
    showItems(navInners, CLASS_LIST.bookNavItem, initialCountNav, loadCountNav);
}