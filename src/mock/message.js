import  Mock  from "mockjs";
import qs from "querystring";
Mock.mock("/api/message","post", {
    code:0,
    msg:"",
    data:{
        id:"@guid",
        nickname:"@cname",
        content:"@cparagraph(1,10)",
        createDate:Date.now(),
        "avatar|1": [
            "https://api.sunweihu.com/api/sjtx/api.php?lx=c1",
            "https://api.dzzui.com/api/avatar?sort=动漫女",
            "https://api.dzzui.com/api/avatar?sort=女",
        ],
    }
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/,"get",function(options){
    const query = qs.parse(options.url);
    return Mock.mock({
        code:0,
        msg:"",
        data:{
            total:52,
            [`rows|${query.limit||10}`]:[
                {
                    id:"@guid",
                    nickname:"@cname",
                    content:"@cparagraph(1,10)",
                    createDate:Date.now(),
                    "avatar|1": [
                        "https://api.sunweihu.com/api/sjtx/api.php?lx=c1",
                        "https://api.dzzui.com/api/avatar?sort=动漫女",
                        "https://api.dzzui.com/api/avatar?sort=女",
                    ],
                }
            ]
        }
    })
})