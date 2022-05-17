//获取远程数据的通用代码
//需要一个具体的获取相关数据的方法：fetchData

export default function(defaultDataVaule = null){
    return {
        data(){
            return {
                isLoading:true,
                data:defaultDataVaule,
            }
        },
        async created(){
            this.data = await this.fetchData();
            console.log(this.data)
            this.isLoading = false;
        }
        
    }
}