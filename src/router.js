import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TemperatureCoefficientCalc from './views/TemperatureCoefficientCalc'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                { path: 'temperature-coefficient', component: TemperatureCoefficientCalc }
            ]
        }
    ]
})
