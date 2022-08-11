import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';

import Card from 'primevue/card'
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";

import Dropdown from "primevue/dropdown";
import Password from "primevue/password";
import Calendar from "primevue/calendar";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true,
        locale: {
            dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            dayNamesShort: ["Вс", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб"],
            dayNamesMin: ["Вс", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь","Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
            today: 'Сегодня',
            weekHeader: 'Нед',
            firstDayOfWeek: 1,
            dateFormat: 'dd/mm/yy',
            weak: 'Слабый',
            medium: 'Средний',
            strong: 'Сильный',
            passwordPrompt: 'Введите пароль',
            emptyFilterMessage: 'Ничего не найдено',
            emptyMessage: 'Нет доступных опций'
        }
    });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Menu', Menu);
    nuxtApp.vueApp.component('Password', Password);
    nuxtApp.vueApp.component('Calendar', Calendar);
})