import dayjs from "dayjs";

/**
 * @description: 时间格式化
 * @param {*} time 时间
 * @param {*} fmt 格式化
 * @return {*}
 */
export const fmtDate = (time, fmt = "YYYY年MM月DD日 HH:mm") => {
    if (!time) return "暂无时间";
    try {
        return dayjs(time).format(fmt);
    } catch (error) {
        console.error("🚀 ~ file: lib.js:25 ~ fmtDate ~ error:", error);
        return "暂无时间";
    }
};

/**
 * @description: 深拷贝
 * @param {*} value
 * @return {*}
 */
export const cloneDeepByJson = (value) => {
    if (value) {
        return JSON.parse(JSON.stringify(value));
    } else {
        return value;
    }
};
