import eventBus from "@/EventBus";
import { debounce } from "@/utils";
import go from "@/assets/go.gif";

let imgs = [];

function setImage(img) {
    img.dom.src = go;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        const tempImg = new Image();
        tempImg.onload = function () {
            img.dom.src = img.src;
        }
        tempImg.src = img.src;
        imgs = imgs.filter(i => i !== img)
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

function handleScroll() {
    setImages();
}


eventBus.$on("mainScroll", debounce(handleScroll, 50))

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el);
    }
}