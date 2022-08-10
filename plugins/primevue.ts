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

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Dialog', Dialog);
    nuxtApp.vueApp.component('Avatar', Avatar);
    nuxtApp.vueApp.component('Dropdown', Dropdown);
    nuxtApp.vueApp.component('Menu', Menu);
})