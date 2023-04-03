import { TEXT_CONTENT, CLASS_LIST, STATE_LIST, BP_LIST } from '../values';

const detailsFilter = document.getElementById("details-filter");
const filterBtn = document.getElementById("filter-btn");

const tagItems = document.querySelectorAll(".tag-item");
const tagBox = document.getElementById("filter-tagbox");
const tagBoxAdded = document.getElementById("filter-tagbox-added");

function lockFilterBody(filter, {lock}) {
    if (filter && !filter.open) {
        document.body.classList.add(lock);
    } else {
        document.body.classList.remove(lock);
    }
}

if (filterBtn && window.innerWidth < BP_LIST.sm) {
    filterBtn.addEventListener("click", (e) => {
        lockFilterBody(detailsFilter, STATE_LIST);
    })   
}

// * TAG ADDING

tagItems.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains(STATE_LIST.added)) {
            e.classList.remove(STATE_LIST.added);
            tagBox.append(e);
        } else {
            tagBoxAdded.append(e);
            e.classList.add(STATE_LIST.added);
        }
    })
})