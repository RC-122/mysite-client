import axios from "axios";
import { Message } from "@/utils";

const ins = axios.create();
ins.interceptors.response.use(function(resp){
    if(resp.data.code!=0){
        Message({
            content:resp.data.msg,
            type:"error",
        })
        return null;
    }
    return resp.data.data;
});

export default ins;
