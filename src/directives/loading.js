import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"

//通过唯一属性选择img元素
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]");
}
//创建img元素并添加唯一属性
function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading
    return img;
}

export default function (el, binding) {
    const curImg = getLoadingImg(el);
    if (binding.value) {    //根据binding的值判断创建还是删除img元素
        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    } else {
        if(curImg){
            curImg.remove();
        }
    }
}