import Mock from "mockjs";
Mock.mock("/api/project", {
    code: 0,
    msg: "",
    "data|10-20": [
        {
            id: "@uuid",
            name: "@ctitle(1,10)",
            "url|1": ["@url", null],
            "github|1": ["@url", null],
            "description|1-5": ["@cparagraph(1,5)"],
            "thumb|1": ["https://v.api.aa1.cn/api/api-tx/index.php?wpon=aosijur75fi5huyty5f",
                "https://cdn.seovx.com/d/?mom=302",
                "https://cdn.seovx.com/?mom=302",
                "https://cdn.seovx.com/ha/?mom=302",],
            order: 1
        }
    ]
})