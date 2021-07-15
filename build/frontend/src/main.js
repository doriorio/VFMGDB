"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __importDefault(require("vue"));
var App_vue_1 = __importDefault(require("./App.vue"));
var router_1 = __importDefault(require("./router"));
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap");
require("@/assets/css/style.css");
var bootstrap4_vue_1 = __importDefault(require("bootstrap4-vue"));
var vuetify_1 = __importDefault(require("@/plugins/vuetify"));
vue_1.default.use(bootstrap4_vue_1.default);
vue_1.default.config.productionTip = false;
vue_1.default.directive('blur', {
    inserted: function (el) {
        el.onfocus = function (ev) { return ev.target.blur(); };
    }
});
new vue_1.default({
    router: router_1.default,
    vuetify: vuetify_1.default,
    render: function (h) { return h(App_vue_1.default); }
}).$mount('#app');
