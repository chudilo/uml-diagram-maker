import VueRouter from 'vue-router';
import Demo from './components/Demo.vue';
import Try from './components/Try.vue';
let routes = [
    {
        path: '/',
        component: Demo
    },
    {
        path:'/try',
        component: Try
    },
];

export default new VueRouter({
    mode: 'history',
    routes
})

new VueRouter({
    routes
});