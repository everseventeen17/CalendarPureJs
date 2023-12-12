# CalendarPureJs
Интеграция:
+ создать обертку для календаря на странице например <div class="calendar-js"></div>
+ создать экземпляр класса Calendar
+ Передаваемый конфиг:
     1.  calendarWrapper: '.calendar-js' класс обертки календаря,
     3.  language: 'ru', язык календаря (русский = ru, английский = en),
     4.  startByCurrentMonth: true, календарь начинается с текущего месяца (true/false),
     5.  onlyThisYear: true, календарь заканчивается в этом году (true/false),
     6.  notActiveDays: {}, передается объект неактивных дней (допустимые значения cur: false/true,  prev: false/true,  next: false/true,  allUpToCurrent: false/true),
     7.  callBackFunction: callBackFunction, функция коллбэк которая срабатывает при клике на день календаря и возвращает объект параметров дня.


