import { getSetting } from "@/api/setting";
import { titleControl } from "@/utils";

export default {
    namespaced:true,
    state:{
        loading:false,
        data:null,
    },
    mutations:{
        setLoading(state,payload){
            state.loading = payload;
        },
        setData(state,payload){
            state.data = payload;
        }
    },
    actions:{
        async fetchSetting(ctx){
            ctx.commit("setLoading", true);
            const resp = await getSetting();
            ctx.commit("setData", resp);
            ctx.commit("setLoading", false);
            if(resp.favtion){
                let link = document.querySelector("link[ref='shortcut icon']");
                if(link){
                    return;
                }
                link = document.createElement("link");
                link.rel="shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favtion;
                document.querySelector("head").appendChild(link);
            }
            if(resp.siteTitle){
                titleControl.setSiteTitle(resp.siteTitle);
            }
        }
    }
}