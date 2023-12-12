# CalendarPureJs
Интеграция:
1. создать обертку для календаря на странице например <div class="calendar-js"></div>
2. создать экземпляр класса Calendar
3. Передаваемый конфиг:
     +  calendarWrapper: '.calendar-js' класс обертки календаря,
     +  language: 'ru', язык календаря (русский = ru, английский = en),
     +  startByCurrentMonth: true, календарь начинается с текущего месяца (true/false),
     +  onlyThisYear: true, календарь заканчивается в этом году (true/false),
     +  notActiveDays: {}, передается объект неактивных дней (допустимые значения cur: false/true,  prev: false/true,  next: false/true,  allUpToCurrent: false/true),
     +  callBackFunction: callBackFunction, функция коллбэк которая срабатывает при клике на день календаря и возвращает объект параметров дня.

### GhPages link: https://everseventeen17.github.io/CalendarPureJs/


