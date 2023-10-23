import { defineStore } from "pinia";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enUS from "ant-design-vue/es/locale/en_US";

/**
 * @description: 语言列表
 * @return {*}
 */
const locales = {
    en: {
        theme: enUS,
        day: "en",
    },
    cn: {
        theme: zhCN,
        day: "zh-cn",
    },
};

export const useSystemStore = defineStore("system", {
    state: () => ({
        theme: zhCN,
    }),
    actions: {
        /**
         * @description: 修改语言
         * @param {*} locale
         * @return {*}
         */
        changeLocale(locale) {
            if (locale.includes("en")) {
                this.theme = locales.en.theme;
                dayjs.locale("en");
            } else {
                this.theme = locales.cn.theme;
                dayjs.locale("zh-cn");
            }
        },
    },
    persist: true,
});
