"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var vue_router_1 = __importDefault(require("vue-router"));
var Home_vue_1 = __importDefault(require("../views/Home.vue"));
var ShoppingList_vue_1 = __importDefault(require("../views/ShoppingList.vue"));
vue_1.default.use(vue_router_1.default);
exports.default = new vue_router_1.default({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home_vue_1.default
        },
        {
            path: '/shoppinglist',
            name: 'shoppingList',
            component: ShoppingList_vue_1.default
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    linkActiveClass: 'active',
});
