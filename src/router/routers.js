// import Home from "@/views/Home";
// import Blog from "@/views/Blog";
// import About from "@/views/About";
// import Project from "@/views/Project";
// import Message from "@/views/Message";
// import BlogDetail from "@/views/Blog/Detail.vue"
import NotFound from "@/views/Project/NotFound"
import "nprogress/nprogress.css";
import { start, done } from "nprogress";

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

function getComp(compResolve) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await compResolve();
        done();
        return comp;
    }
}

// function getPageComponent(pageCompResolver) {
//   return async () => {
//     start();
//     if (process.env.NODE_ENV === "development") {
//       await delay(2000);
//     }
//     const comp = await pageCompResolver();
//     done();
//     return comp;
//   };
// }
export default
    [
        {
            name: "Home",
            path: "/",
            component: getComp(() =>
                import("@/views/Home")
            ),
            meta: {
                title: "首页"
            }
        },
        {
            name: "Blog", path: "/article", component: getComp(() =>
                import("@/views/Blog")
            ), meta: {
                title: "文章"
            }
        },
        {
            name: "CategoryBlog", path: "/article/cate/:categoryId", component: getComp(() =>
                import("@/views/Blog")
            ), meta: {
                title: "文章"
            }
        },
        {
            name: "BlogDetail", path: "/article/:id", component: getComp(() =>
                import("@/views/Blog/Detail.vue")
            ), meta: {
                title: "文章详情"
            }
        },
        {
            name: "About", path: "/about", component: getComp(() =>
                import("@/views/About")
            ), meta: {
                title: "关于我"
            }
        },
        {
            name: "Project", path: "/project", component: getComp(() =>
                import("@/views/Project")
            ), meta: {
                title: "我的项目"
            }
        },
        {
            name: "Message", path: "/message", component: getComp(() =>
                import("@/views/Message")
            ), meta: {
                title: "留言板"
            }
        },
        {
            name: "NotFound",
            path: "*",
            component: NotFound
        }
    ]