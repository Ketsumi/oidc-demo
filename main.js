(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-callback.component.html":
/*!*********************************************!*\
  !*** ./src/app/app-callback.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-callback works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-callback.component.sass":
/*!*********************************************!*\
  !*** ./src/app/app-callback.component.sass ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-callback.component.ts":
/*!*******************************************!*\
  !*** ./src/app/app-callback.component.ts ***!
  \*******************************************/
/*! exports provided: AppCallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCallbackComponent", function() { return AppCallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppCallbackComponent = /** @class */ (function () {
    function AppCallbackComponent(location, http) {
        this.location = location;
        this.http = http;
    }
    AppCallbackComponent.prototype.ngOnInit = function () {
        this.http.post('https://auth.mewtropolis.me/api/auth/callback', {
            url: location.href
        });
        console.log(location.href);
    };
    AppCallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-callback',
            template: __webpack_require__(/*! ./app-callback.component.html */ "./src/app/app-callback.component.html"),
            styles: [__webpack_require__(/*! ./app-callback.component.sass */ "./src/app/app-callback.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppCallbackComponent);
    return AppCallbackComponent;
}());



/***/ }),

/***/ "./src/app/app-home.component.html":
/*!*****************************************!*\
  !*** ./src/app/app-home.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-home.component.sass":
/*!*****************************************!*\
  !*** ./src/app/app-home.component.sass ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-home.component.ts":
/*!***************************************!*\
  !*** ./src/app/app-home.component.ts ***!
  \***************************************/
/*! exports provided: AppHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHomeComponent", function() { return AppHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHomeComponent = /** @class */ (function () {
    function AppHomeComponent() {
    }
    AppHomeComponent.prototype.ngOnInit = function () {
    };
    AppHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-home',
            template: __webpack_require__(/*! ./app-home.component.html */ "./src/app/app-home.component.html"),
            styles: [__webpack_require__(/*! ./app-home.component.sass */ "./src/app/app-home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "./src/app/app-login.component.html":
/*!******************************************!*\
  !*** ./src/app/app-login.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"googleLogin()\">Google Login</button>\r\n"

/***/ }),

/***/ "./src/app/app-login.component.sass":
/*!******************************************!*\
  !*** ./src/app/app-login.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-login.component.ts":
/*!****************************************!*\
  !*** ./src/app/app-login.component.ts ***!
  \****************************************/
/*! exports provided: AppLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function() { return AppLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLoginComponent = /** @class */ (function () {
    function AppLoginComponent() {
        // this.googleUrl = this.generateUrl('https://accounts.google.com/o/oauth2/v2/auth?', Auth.google);
        this.googleUrl = 'https://auth.mewtropolis.me/api/auth/google';
    }
    AppLoginComponent.prototype.ngOnInit = function () {
    };
    AppLoginComponent.prototype.googleLogin = function () {
        console.log(this.googleUrl);
        window.open(this.googleUrl, '_self');
    };
    AppLoginComponent.prototype.secure = function (params) {
        var credentials = {
            client_id: params.client_id,
            redirect_uri: params.redirect_uri,
            response_type: params.response_type,
            scope: params.scope,
            nonce: this.randomCode(),
            state: this.randomCode()
        };
        return credentials;
    };
    AppLoginComponent.prototype.randomCode = function () {
        var code = Math.floor(Math.random() * 10000 + 1000) + "-" +
            (Math.floor(Math.random() * 10000 + 1000) + "-") +
            ("" + Math.floor(Math.random() * 10000 + 1000));
        return code;
    };
    AppLoginComponent.prototype.generateUrl = function (issuer, params) {
        var securedParams = this.secure(params);
        var queryParams = Object
            .entries(securedParams)
            .map(function (_a) {
            var k = _a[0], v = _a[1];
            return k + "=" + v;
        })
            .join('&');
        var url = issuer + queryParams.replace(/ /g, '%20');
        return url;
    };
    AppLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-login',
            template: __webpack_require__(/*! ./app-login.component.html */ "./src/app/app-login.component.html"),
            styles: [__webpack_require__(/*! ./app-login.component.sass */ "./src/app/app-login.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLoginComponent);
    return AppLoginComponent;
}());



/***/ }),

/***/ "./src/app/app-logout.component.html":
/*!*******************************************!*\
  !*** ./src/app/app-logout.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-logout.component.sass":
/*!*******************************************!*\
  !*** ./src/app/app-logout.component.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-logout.component.ts":
/*!*****************************************!*\
  !*** ./src/app/app-logout.component.ts ***!
  \*****************************************/
/*! exports provided: AppLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLogoutComponent", function() { return AppLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppLogoutComponent = /** @class */ (function () {
    function AppLogoutComponent() {
    }
    AppLogoutComponent.prototype.ngOnInit = function () {
    };
    AppLogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-logout',
            template: __webpack_require__(/*! ./app-logout.component.html */ "./src/app/app-logout.component.html"),
            styles: [__webpack_require__(/*! ./app-logout.component.sass */ "./src/app/app-logout.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppLogoutComponent);
    return AppLogoutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-home.component */ "./src/app/app-home.component.ts");
/* harmony import */ var _app_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-login.component */ "./src/app/app-login.component.ts");
/* harmony import */ var _app_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-logout.component */ "./src/app/app-logout.component.ts");
/* harmony import */ var _app_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-callback.component */ "./src/app/app-callback.component.ts");
/* harmony import */ var _app_status404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-status404.component */ "./src/app/app-status404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _app_home_component__WEBPACK_IMPORTED_MODULE_2__["AppHomeComponent"] },
    { path: 'login', component: _app_login_component__WEBPACK_IMPORTED_MODULE_3__["AppLoginComponent"] },
    { path: 'logout', component: _app_logout_component__WEBPACK_IMPORTED_MODULE_4__["AppLogoutComponent"] },
    { path: 'callback', component: _app_callback_component__WEBPACK_IMPORTED_MODULE_5__["AppCallbackComponent"] },
    { path: 'status404', component: _app_status404_component__WEBPACK_IMPORTED_MODULE_6__["AppStatus404Component"] },
    { path: '**', redirectTo: '/status404', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-status404.component.html":
/*!**********************************************!*\
  !*** ./src/app/app-status404.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-status404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/app-status404.component.sass":
/*!**********************************************!*\
  !*** ./src/app/app-status404.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-status404.component.ts":
/*!********************************************!*\
  !*** ./src/app/app-status404.component.ts ***!
  \********************************************/
/*! exports provided: AppStatus404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStatus404Component", function() { return AppStatus404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppStatus404Component = /** @class */ (function () {
    function AppStatus404Component() {
    }
    AppStatus404Component.prototype.ngOnInit = function () {
    };
    AppStatus404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-status404',
            template: __webpack_require__(/*! ./app-status404.component.html */ "./src/app/app-status404.component.html"),
            styles: [__webpack_require__(/*! ./app-status404.component.sass */ "./src/app/app-status404.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppStatus404Component);
    return AppStatus404Component;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    OAuth 2.0 / OIDC Demo\r\n  </h1>\r\n</div>\r\n\r\n<div>\r\n  <ul>\r\n    <li>\r\n      <a routerLink=\"\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"login\">Login</a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"logout\">Logout</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'oidc-demo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-login.component */ "./src/app/app-login.component.ts");
/* harmony import */ var _app_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-callback.component */ "./src/app/app-callback.component.ts");
/* harmony import */ var _app_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-logout.component */ "./src/app/app-logout.component.ts");
/* harmony import */ var _app_status404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-status404.component */ "./src/app/app-status404.component.ts");
/* harmony import */ var _app_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-home.component */ "./src/app/app-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_login_component__WEBPACK_IMPORTED_MODULE_5__["AppLoginComponent"],
                _app_callback_component__WEBPACK_IMPORTED_MODULE_6__["AppCallbackComponent"],
                _app_logout_component__WEBPACK_IMPORTED_MODULE_7__["AppLogoutComponent"],
                _app_status404_component__WEBPACK_IMPORTED_MODULE_8__["AppStatus404Component"],
                _app_home_component__WEBPACK_IMPORTED_MODULE_9__["AppHomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/exercises/oauth/oidc-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map