import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TemperatureCoefficientCalc from './views/TemperatureCoefficientCalc'
import ResistanceCalc from './views/ResistanceCalc'
import ResistivityCalc from './views/ResistivityCalc'
import TemperatureCalc from './views/TemperatureCalc'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                { path: 'temperature-coefficient', component: TemperatureCoefficientCalc },
                { path: 'resistivity', component: ResistivityCalc },
                { path: 'resistance', component: ResistanceCalc },
                { path: 'temperature', component: TemperatureCalc },
            ]
        }
    ]
})
