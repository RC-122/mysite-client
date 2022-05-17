import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon.vue";
import styles from "./Message.module.less"

/**
 * 
 * @param {String} content 
 * @param {String} type 
 * @param {Number} duration
 * @param {HTMLElement} container 
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;


    //创建消息元素
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    })

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`;


    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }

    container.appendChild(div);
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`

    setTimeout(() => {
        div.style.transform = `translate(-50%,-50%) translateY(-20px)`;
        div.style.opacity = 0;
        div.addEventListener("transitionend", function () {
            div.remove();
        }, { once: true })
        options.callback && options.callback()
    }, duration);
}