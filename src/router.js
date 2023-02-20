import {createRouter, createWebHistory} from "vue-router";
import MainPage from './components/MainPage.vue';
import ProcessPage from './components/ProcessPage.vue';
import AboutCompany from './components/AboutCompany.vue';
import WhyUsPage from './components/WhyUsPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'main', component: MainPage},
    {path: '/process', name: 'process', component: ProcessPage},
    {path: '/company', name: 'company', component: AboutCompany},
    {path: '/why-us', name: 'why-us', component: WhyUsPage},
  ]
});
