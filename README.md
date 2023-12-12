# CalendarPureJs
Интеграция:
1. создать обертку для календаря на странице например <div class="calendar-js"></div>
2. создать экземпляр класса Calendar
   2.1. Передаваемый конфиг:
     2.1.1  calendarWrapper: '.calendar-js' класс обертки календаря,
     2.1.2  language: 'ru', язык календаря (русский = ru, английский = en),
     2.1.3  startByCurrentMonth: true, календарь начинается с текущего месяца (true/false),
     2.1.4  onlyThisYear: true, календарь заканчивается в этом году (true/false),
     2.1.5  notActiveDays: {}, передается объект неактивных дней (допустимые значения cur: false/true,  prev: false/true,  next: false/true,  allUpToCurrent: false/true),
     2.1.6  callBackFunction: callBackFunction, функция коллбэк которая срабатывает при клике на день календаря и возвращает объект параметров дня.


