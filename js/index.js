import {Calendar} from "./Calendar.js";

new Calendar({
    calendarWrapper: '.calendar-js',
    language: 'ru',
    startByCurrentMonth: true,
    onlyThisYear: false,
    notActiveDays: {
        cur: false,
        prev: true,
        next: true,
        allUpToCurrent: true,
    },
})





