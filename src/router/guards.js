import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

export default {
    before: {
        /**
         * @description: 页面加载开始
         * @return {*}
         */
        pageStart() {
            NProgress.start();
        },
    },
    after: {
        /**
         * @description: 页面加载失败
         * @return {*}
         */
        pageEnd() {
            NProgress.done();
        },
    },
};
