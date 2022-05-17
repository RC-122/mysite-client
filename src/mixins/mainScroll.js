export default function(refValue) {
    return {
        mounted() {
            this.$bus.$on("setMainScroll", this.handleSetScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit("mainScroll");
            this.$bus.$off("setMainScroll", this.handleSetScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
        },
        methods: {
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            handleSetScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
        },
    }
}