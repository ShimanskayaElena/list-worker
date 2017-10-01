webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 768px) {\r\n    h1 {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>List Worker App</h1>\n</div>\n<app-list-worker></app-list-worker>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list_worker_list_worker_component__ = __webpack_require__("../../../../../src/app/list/list-worker/list-worker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_worker_worker_component__ = __webpack_require__("../../../../../src/app/list/worker/worker.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__list_list_worker_list_worker_component__["a" /* ListWorkerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__list_worker_worker_component__["a" /* WorkerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_service__ = __webpack_require__("../../../../../src/app/core/list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */]
        ],
        exports: [],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__list_service__["a" /* ListService */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListService = (function () {
    function ListService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/users';
        this.property = 'worker';
    }
    // <ListWorker> - this is the type of response from the server
    ListService.prototype.getListWorker = function () {
        return this.http.get(this.url);
    };
    ListService.prototype.getSelectedWorker = function () {
        if (localStorage.getItem(this.property)) {
            return JSON.parse(localStorage.getItem(this.property));
        }
        else {
            return this.selectedWorker;
        }
    };
    ListService.prototype.setSelectedWorker = function (worker) {
        this.selectedWorker = worker;
        localStorage.setItem(this.property, JSON.stringify(worker));
    };
    return ListService;
}());
ListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ListService);

var _a;
//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ "../../../../../src/app/list/list-worker/list-worker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-wrap: nowrap;\r\n\t    flex-wrap: nowrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-webkit-box-align: center;\r\n\t    -ms-flex-align: center;\r\n\t        align-items: center;\r\n\tmargin: 0 10%;\r\n}\r\n\r\n.flex-container div:first-child {\r\n\tborder-left: 1px solid gray;\r\n}\r\n\r\n.flex-item {\r\n\twidth: 25%;\r\n\tpadding-top: 1%;\r\n\tpadding-bottom: 1%;\r\n\tborder-bottom: 1px solid gray;\r\n\tborder-right: 1px solid gray;\r\n}\r\n\r\n.flex-item-head {\r\n\tborder-top: 1px solid gray;\r\n\tfont-size: 20px;\r\n\tfont-weight: 600;\r\n\ttext-align: center;\r\n}\r\n\r\n.flex-item-body {\r\n\tcursor: pointer;\r\n\tpadding-left: 2%;\r\n}\r\n\r\ndiv:hover .flex-item-body {\r\n\tcolor: #ff5252;\r\n}\r\n\r\nli {\r\n\tlist-style-type: none;\r\n}\r\n\r\n/* li > span {\r\n\tcursor: pointer;\r\n\tcolor: gray;\r\n\tfont-size: 14px;\r\n}\r\n\r\nli > span:hover {\r\n\tcolor: #ff5252;\r\n} \r\n\r\n.list {\r\n\tpadding: 10px 0;\r\n\ttransition: all .2s ease;\r\n}*/\r\n\r\n.overlay {\r\n    position: absolute;\r\n\twidth: 100%;\r\n    height: 100vh;\r\n\ttop: 0;\r\n    left: 0;\r\n\tbackground-color: rgba(0, 0, 0, .6);\r\n}\r\n\r\n.close-popup {\r\n\tposition: absolute;\r\n\ttop: 15px;\r\n\tright: 15px;\r\n\twidth: 23px;\r\n\theight: 23px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.close-popup:before {\r\n\tcontent: '';\r\n\tbackground-color: #fff;\r\n\tposition: absolute;\r\n\theight: 1px;\r\n\twidth: 31px;\r\n\ttop: 11px;\r\n\tleft: -4px;\r\n\t-webkit-transform: rotate(-45deg);\r\n\t        transform: rotate(-45deg);\r\n}\r\n\r\n.close-popup:after {\r\n\tcontent: '';\r\n\tbackground-color: #fff;\r\n\tposition: absolute;\r\n\theight: 1px;\r\n\twidth: 31px;\r\n\ttop: 11px;\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\tleft: -4px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\t.flex-container {\r\n\t\tmargin: 0 5%;\r\n\t}\r\n\r\n\t.flex-item-head {\r\n\t\tfont-size: 16px;\t\r\n\t}\r\n\r\n\t.flex-item-body {\r\n\t\tpadding-left: 1%;\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.flex-container {\r\n\t\tmargin: 0 3%;\r\n\t}\r\n\r\n\t.flex-item-head {\r\n\t\tfont-size: 12px;\t\r\n\t}\r\n\r\n\t.flex-item-body {\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n\t.flex-container {\r\n\t\tmargin: 0 1%;\r\n\t}\r\n\r\n\t.hidden {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.flex-item {\r\n\t\twidth: 50%;\r\n\t\tfont-size: 13px;\r\n\t\tpadding: 3% 0 3% 1%;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list-worker/list-worker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n    <div class=\"flex-item flex-item-head\">name</div>\r\n    <div class=\"flex-item flex-item-head hidden\">username</div>\r\n    <div class=\"flex-item flex-item-head hidden\">website</div>\r\n    <div class=\"flex-item flex-item-head\">company</div>\r\n</div>\r\n\r\n<div class=\"flex-container\" *ngFor=\"let worker of listWorker\"  (click)=\"onSelect(worker)\">\r\n  <div class=\"flex-item flex-item-body\">{{worker.name}}</div>\r\n  <div class=\"flex-item flex-item-body hidden\">{{worker.username}}</div>\r\n  <div class=\"flex-item flex-item-body hidden\">{{worker.website}}</div>\r\n  <div class=\"flex-item flex-item-body\">{{worker.company.name}}</div>\r\n</div>\r\n\r\n<!--<ul>\r\n  <li class=\"list\" *ngFor=\"let worker of listWorker\">\r\n    {{worker.name}}\r\n    <span (click)=\"onSelect(worker)\">more info</span>\r\n  </li>\r\n</ul>-->\r\n\r\n<div class=\"overlay\" *ngIf=\"selectedWorker\">\r\n  <app-worker>\r\n    <div>\r\n      <p>name: {{selectedWorker.name}}</p>\r\n      <p>username: {{selectedWorker.username}}</p>\r\n      <p>email: {{selectedWorker.email}}</p>\r\n      <p>address:</p>\r\n      <ul>\r\n        <li>street: {{selectedWorker.address.street}}</li>\r\n        <li>suite: {{selectedWorker.address.suite}}</li>\r\n        <li>city: {{selectedWorker.address.city}}</li>\r\n        <li>zipcode: {{selectedWorker.address.zipcode}}</li>\r\n        <li>geo:\r\n          <ul>\r\n            <li>lat: {{selectedWorker.address.geo.lat}}</li>\r\n            <li>lng: {{selectedWorker.address.geo.lng}}</li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <p>phone: {{selectedWorker.phone}}</p>\r\n      <p>website: {{selectedWorker.website}}</p>\r\n      <p>company:</p>\r\n        <ul>\r\n          <li>name: {{selectedWorker.company.name}}</li>\r\n          <li>catchPhrase: {{selectedWorker.company.catchPhrase}}</li>\r\n          <li>bs: {{selectedWorker.company.bs}}</li>\r\n        </ul>\r\n      <div class=\"close-popup\" (click)=\"delete(selectedWorker)\"></div>\r\n    </div>\r\n  </app-worker>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/list/list-worker/list-worker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_list_service__ = __webpack_require__("../../../../../src/app/core/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data__ = __webpack_require__("../../../../../src/app/shared/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListWorkerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListWorkerComponent = (function () {
    function ListWorkerComponent(listService) {
        this.listService = listService;
    }
    ListWorkerComponent.prototype.ngOnInit = function () {
        // Так как у репозитория на github (https://github.com/ShimanskayaElena/list-worker)
        // и у источика данных для приложения (http://jsonplaceholder.typicode.com/users)
        // разные протоколы у меня не получилось сделать демо версию приложения на gh-pages
        // поэтому я вынуждена упростить получение данных, чтобы можно было увидеть реализацию этого проекта
        // это никак не отразилось на его функциональности
        /* this.listService.getListWorker()
          .subscribe(
            data => this.listWorker = data,
            error => this.errorMessage = <any>error
          );*/
        this.listWorker = __WEBPACK_IMPORTED_MODULE_2__shared_data__["a" /* data */];
        this.selectedWorker = this.listService.getSelectedWorker();
    };
    ListWorkerComponent.prototype.onSelect = function (worker) {
        this.selectedWorker = worker;
        this.listService.setSelectedWorker(worker);
    };
    ListWorkerComponent.prototype.delete = function (worker) {
        this.selectedWorker = null;
        this.listService.setSelectedWorker(this.selectedWorker);
    };
    return ListWorkerComponent;
}());
ListWorkerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-list-worker',
        template: __webpack_require__("../../../../../src/app/list/list-worker/list-worker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list-worker/list-worker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_list_service__["a" /* ListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_list_service__["a" /* ListService */]) === "function" && _a || Object])
], ListWorkerComponent);

var _a;
//# sourceMappingURL=list-worker.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/worker/worker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup {\r\n\tposition: absolute;\r\n\twidth: 400px;\r\n\tleft: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n\tpadding: 0 20px;\r\n\tbox-sizing: border-box;\r\n\tbackground-color: #ff5252;\r\n\tfont-size: 14px;\r\n\tcolor: #fff;\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n    .popup {\r\n\t\twidth: 100%;\r\n\t\theight: 100vh;\r\n\t\tfont-size: 15px;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/worker/worker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/worker/worker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkerComponent = (function () {
    function WorkerComponent() {
    }
    return WorkerComponent;
}());
WorkerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-worker',
        template: __webpack_require__("../../../../../src/app/list/worker/worker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/worker/worker.component.css")]
    })
], WorkerComponent);

//# sourceMappingURL=worker.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map