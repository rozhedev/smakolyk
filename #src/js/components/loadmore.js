const TEXT_CONTENT = {
    btnShow: "Показати більше...",
    btnHide: "Згорнути", 
}

// TODO Сделай под несколько таких элементов
const loadmore = document.querySelector(".loadmore");
let initialValue = 3;
let currentItems = 3;

if (loadmore) {
    const itemsList = document.querySelectorAll(".vacancy-card__list-item");
    // * Show or hide all list items
    for (let i = 0; i < currentItems; i++) {
        itemsList[i].classList.add("_show");
    }
    for (let i = currentItems; currentItems++ < itemsList.length; i++) {
        itemsList[i].classList.add("_hide");
    }
    let loadItemsCount = document.querySelectorAll(".vacancy-card__list-item._show").length;

    loadmore.addEventListener("click", (e) => {
        const showItemsList = document.querySelectorAll(".vacancy-card__list-item._show");

        if (showItemsList.length != itemsList.length) {
            // * Load items
            for (let k = showItemsList.length; k < showItemsList.length + loadItemsCount; k++) {
                if (itemsList[k] !== undefined) {
                    itemsList[k].classList.add("_show");
                    itemsList[k].classList.remove("_hide");

                } else loadmore.textContent = TEXT_CONTENT.btnHide;
            }
            currentItems += loadItemsCount;

        } else {
            // * Hide items
            currentItems = initialValue;
            for (let j = showItemsList.length - 1; j >= currentItems; j--) {
                itemsList[j].classList.add("_hide");
                itemsList[j].classList.remove("_show");
                loadmore.textContent = TEXT_CONTENT.btnShow;
            }
        }
    })
}