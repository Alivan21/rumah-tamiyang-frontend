import { monthList } from "./constant";

export function dateToNamingMonthFormat(date: string): string {
    if (!date) return "";
    const dateArr: string[] = date.split("-");
    const month = monthList.find(month => month.value === dateArr[1]);
    return `${dateArr[2]} ${month?.label} ${dateArr[0]}`;
};