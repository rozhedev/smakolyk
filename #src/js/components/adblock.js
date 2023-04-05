import { STATE_LIST } from '../values';

const detect = document.querySelector("#detect");
const advertPopup = document.querySelector(".advert-popup");
const button = advertPopup.querySelector(".advert-popup__btn");
let showInterval = 10000;

let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];
for (let item of adClasses) {
    detect.classList.add(item);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");

setInterval(() => {
    if (!advertPopup.classList.contains(STATE_LIST.show)) {
        if (getProperty == "none") {
            advertPopup.classList.add(STATE_LIST.show);
            document.body.classList.add(STATE_LIST.lock);
        } else { 
            advertPopup.classList.remove(STATE_LIST.show); 
            document.body.classList.remove(STATE_LIST.lock);
        }
    }
}, showInterval)

if (button) {
    button.addEventListener("click", () => {
        advertPopup.classList.remove(STATE_LIST.show);
        document.body.classList.remove(STATE_LIST.lock);
        // * Work incorrect
        window.location.reload();
    });
}