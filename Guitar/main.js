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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _components_shoping_home_shoping_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shoping-home/shoping-home.component */ "./src/app/components/shoping-home/shoping-home.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _components_shoping_filters_shoping_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shoping-filters/shoping-filters.component */ "./src/app/components/shoping-filters/shoping-filters.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
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
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
                _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["OrderConfirmationComponent"],
                _components_shoping_home_shoping_home_component__WEBPACK_IMPORTED_MODULE_10__["ShopingHomeComponent"],
                _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_11__["ShoppingCartComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _components_shoping_filters_shoping_filters_component__WEBPACK_IMPORTED_MODULE_15__["ShopingFiltersComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_14__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _services_products_service__WEBPACK_IMPORTED_MODULE_17__["ProductsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order-confirmation/order-confirmation.component */ "./src/app/components/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _components_shoping_home_shoping_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shoping-home/shoping-home.component */ "./src/app/components/shoping-home/shoping-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: _todos_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"]
    },
    {
        path: 'checkout',
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__["CheckoutComponent"]
    },
    {
        path: 'orderconfirm',
        component: _components_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["OrderConfirmationComponent"]
    },
    {
        path: 'home',
        component: _components_shoping_home_shoping_home_component__WEBPACK_IMPORTED_MODULE_5__["ShopingHomeComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout{\r\n    margin:0 auto;\r\n}\r\n\r\n.empty{\r\n    text-align: center;\r\n    padding: 150px 0px 150px 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-9 checkout\" *ngIf=\"carts.length>0\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>Product</th>\n                <th>Quantity</th>\n                <th class=\"text-center\">Price</th>\n                <th class=\"text-center\">Total</th>\n                <th> </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of carts;index as i\">\n                <td class=\"col-sm-8 col-md-6\">\n                <div class=\"media\">\n                    <a class=\"thumbnail pull-left\" href=\"#\"> <img class=\"media-object\" src=\"./assets/images/{{item.id}}.jpg\" style=\"width: 72px; height: 72px;\"> </a>\n                    &nbsp;&nbsp;<div class=\"media-body\">\n                        <h5 class=\"media-heading\">{{item.name}}</h5>\n                        <h6 class=\"media-heading\"> by Brand name</h6>\n                        <span>Status: </span><span class=\"text-success\"><strong>In Stock</strong></span>\n                    </div>\n                </div></td>\n                <td class=\"col-sm-1 col-md-1\" style=\"text-align: center\">\n                <input type=\"number\" min=\"1\" max=\"8\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"item.qty\" (change)=\"calculate()\">\n                </td>\n                <td class=\"col-sm-1 col-md-2 text-center\"><strong>{{item.price | currency:'INR'}}</strong></td>\n                <td class=\"col-sm-1 col-md-2 text-center\"><strong>{{item.price * item.qty| currency:'INR'}}</strong></td>\n                <td class=\"col-sm-1 col-md-1\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(i)\">\n                    <span class=\"glyphicon glyphicon-remove\"></span> Remove\n                </button></td>\n            </tr>\n           \n        </tbody>\n        <tfoot>\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   </td>\n                <td><h5>Subtotal<br>shipping</h5><h3>Total</h3></td>\n                <td class=\"text-right\"><h5><strong>{{subTotal|currency:'INR'}}<br>{{50|currency:'INR'}}</strong></h5><h3>{{subTotal+50|currency:'INR'}}</h3></td>\n            </tr>\n            <tr>\n                <td>   </td>\n                <td>   </td>\n                <td>   </td>\n                <td>\n                <button type=\"button\" class=\"btn btn-default\"  routerLink=\"/home\">\n                    <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n                </button></td>\n                <td>\n                <button type=\"button\" class=\"btn btn-success\"  routerLink=\"/orderconfirm\">\n                    Checkout <span class=\"glyphicon glyphicon-play\"></span>\n                </button></td>\n            </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"empty container\" *ngIf=\"carts.length==0\">\n    <h3>Your cart is empty </h3>\n        <button type=\"button\" class=\"btn btn-default\"  routerLink=\"/home\">\n            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n        </button>\n</div>"

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(http) {
        this.http = http;
        this.carts = [];
        this.finalCart = [];
        this.mycarts = [];
        this.subTotal = 0;
        this.deliveryTotal = 0;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.carts = this.http.getProductfromCart();
        this.calculate();
    };
    CheckoutComponent.prototype.calculate = function () {
        var _this = this;
        this.subTotal = 0;
        this.carts.map(function (obj) {
            _this.subTotal += obj.price * obj.qty;
        });
    };
    CheckoutComponent.prototype.remove = function (index) {
        this.carts.splice(index, 1);
        this.calculate();
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFooter {\r\n\tbackground-color: #373a48;\r\n\tcolor:white;\r\n}\r\n\r\n#myFooter .footer-copyright{\r\n\tbackground-color: #383737;\r\n\tpadding-top:3px;\r\n\tpadding-bottom:3px;\r\n\ttext-align: center;\r\n}\r\n\r\n#myFooter .footer-copyright p{\r\n\tmargin:10px;\r\n\tcolor: #ccc;\r\n}\r\n\r\n#myFooter ul{\r\n\tlist-style-type: none;\r\n    padding-left: 0;\r\n    line-height: 1.7;\r\n\r\n}\r\n\r\n#myFooter h5{\r\n\tfont-size: 18px;\r\n    color: white;\r\n    font-weight: bold;\r\n    margin-top: 30px;\r\n}\r\n\r\n#myFooter a{\r\n\tcolor:#d2d1d1;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#myFooter a:hover, #myFooter a:focus{\r\n\ttext-decoration: none;\r\n\tcolor:white;\r\n}\r\n\r\n#myFooter .myCols{\r\n\ttext-align: center;\r\n}\r\n\r\n#myFooter .social-networks{\r\n\ttext-align: center;\r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 38px;\r\n}\r\n\r\n#myFooter .social-networks a{\r\n    font-size: 32px;\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n    color: #f9f9f9;\r\n    padding: 10px;\r\n    transition: 0.2s;\r\n}\r\n\r\n#myFooter .social-networks a:hover{\r\n\ttext-decoration: none;\r\n\r\n}\r\n\r\n#myFooter .facebook:hover{\r\n\tcolor:#0077e2;\r\n}\r\n\r\n#myFooter .google:hover{\r\n\tcolor:#ef1a1a;\r\n}\r\n\r\n#myFooter .twitter:hover{\r\n\tcolor: #00aced;\r\n}\r\n\r\n@media screen and (max-width: 767px){\r\n\t#myFooter {\r\n\t\ttext-align: center;\r\n\t}\r\n}\r\n\r\n/* CSS used for positioning the footers at the bottom of the page. */\r\n\r\n/* You can remove this. */\r\n\r\nhtml{\r\n\theight: 100% !important;\r\n}\r\n\r\nbody{\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.content{\r\n\tflex: 1 0 auto;\r\n\t-webkit-flex: 1 0 auto;\r\n\tmin-height: 200px;\r\n}\r\n\r\n#myFooter{\r\n\tflex: 0 0 auto;\r\n    -webkit-flex: 0 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"myFooter\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-3 myCols\">\n              <h5>Get started</h5>\n              <ul>\n                  <li><a href=\"#\">Home</a></li>\n                  <li><a href=\"#\">Sign up</a></li>\n                  <li><a href=\"#\">Downloads</a></li>\n              </ul>\n          </div>\n          <div class=\"col-sm-3 myCols\">\n              <h5>About us</h5>\n              <ul>\n                  <li><a href=\"#\">Company Information</a></li>\n                  <li><a href=\"#\">Contact us</a></li>\n                  <li><a href=\"#\">Reviews</a></li>\n              </ul>\n          </div>\n          <div class=\"col-sm-3 myCols\">\n              <h5>Support</h5>\n              <ul>\n                  <li><a href=\"#\">FAQ</a></li>\n                  <li><a href=\"#\">Help desk</a></li>\n                  <li><a href=\"#\">Forums</a></li>\n              </ul>\n          </div>\n          <div class=\"col-sm-3 myCols\">\n              <h5>Legal</h5>\n              <ul>\n                  <li><a href=\"#\">Terms of Service</a></li>\n                  <li><a href=\"#\">Terms of Use</a></li>\n                  <li><a href=\"#\">Privacy Policy</a></li>\n              </ul>\n          </div>\n      </div>\n  </div>\n  <div class=\"social-networks\">\n      <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n      <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook-official\"></i></a>\n      <a href=\"#\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n  </div>\n  <div class=\"footer-copyright\">\n      <p>© 2016 Copyright Text </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#flipkart-navbar {\r\n    background-color: #15294b;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.row1{\r\n    padding-top: 10px;\r\n}\r\n\r\n.row2 {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.flipkart-navbar-input {\r\n    padding: 11px 16px;\r\n    border-radius: 2px 0 0 2px;\r\n    border: 0 none;\r\n    outline: 0 none;\r\n    font-size: 15px;\r\n}\r\n\r\n.flipkart-navbar-button {\r\n    background-color: #ffe11b;\r\n    border: 1px solid #ffe11b;\r\n    border-radius: 0 2px 2px 0;\r\n    color: #565656;\r\n    padding: 15px 0;\r\n    height: 45px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-button {\r\n    background-color: #2469d9;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .23), inset 1px 1px 0 0 hsla(0, 0%, 100%, .2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    height: 41px;\r\n    border-radius: 2px;\r\n    font-weight: 500;\r\n    width: 120px;\r\n    display: inline-block;\r\n    color: #FFFFFF;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.cart-button:hover{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-svg {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n}\r\n\r\n.item-number {\r\n    border-radius: 3px;\r\n    background-color: rgba(0, 0, 0, .1);\r\n    height: 20px;\r\n    padding: 3px 6px;\r\n    font-weight: 500;\r\n    display: inline-block;\r\n    color: #fff;\r\n    line-height: 12px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.upper-links {\r\n    display: inline-block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    font-size: 12px;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.dropdown:hover .links {\r\n    color: #000;\r\n}\r\n\r\n.dropdown:hover .dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown .dropdown-menu {\r\n    position: absolute;\r\n    top: 100%;\r\n    display: none;\r\n    background-color: #fff;\r\n    color: #333;\r\n    left: 0px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    margin: 0;\r\n    padding: 0px;\r\n}\r\n\r\n.links {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.links:hover {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.profile-links {\r\n    font-size: 12px;\r\n    font-family: 'Roboto', sans-serif;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    padding: 0 11px;\r\n    line-height: 23px;\r\n}\r\n\r\n.profile-li{\r\n    padding-top: 2px;\r\n}\r\n\r\n.largenav {\r\n    display: none;\r\n}\r\n\r\n.smallnav{\r\n    display: block;\r\n}\r\n\r\n.smallsearch{\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.menu{\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .largenav {\r\n        display: block;\r\n    }\r\n    .smallnav{\r\n        display: none;\r\n    }\r\n    .smallsearch{\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Sidenav*/\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #fff;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    box-shadow: 0 4px 8px -3px #555454;\r\n    padding-top: 0px;\r\n}\r\n\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s\r\n}\r\n\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n    color: #fff;        \r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav a {font-size: 18px;}\r\n}\r\n\r\n.sidenav-heading{\r\n    font-size: 36px;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>MyMaterial</span>\n\n    <span class=\"example-spacer\"></span>\n    \n    <button mat-button routerLink=\"/checkout\">Checkout</button>\n    <button mat-button routerLink=\"/orderconfirm\">Order Confirm</button>\n    <button mat-button routerLink=\"/home\">Home</button>\n  </mat-toolbar-row>\n</mat-toolbar> -->\n\n<div id=\"flipkart-navbar\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <ul class=\"col-md-12 \">\n              <li class=\"upper-links \"><a class=\"links\" href=\"http://clashhacks.in/\">Link 1</a></li>\n              <li class=\"upper-links\"><a class=\"links\" href=\"https://campusbox.org/\">Link 2</a></li>\n              <li class=\"upper-links\"><a class=\"links\" href=\"http://clashhacks.in/\">Link 3</a></li>\n              <li class=\"upper-links\"><a class=\"links\" href=\"http://clashhacks.in/\">Link 4</a></li>\n              <li class=\"upper-links\"><a class=\"links\" href=\"http://clashhacks.in/\">Link 5</a></li>\n              <li class=\"upper-links\"><a class=\"links\" href=\"http://clashhacks.in/\">Link 6</a></li>\n              <li class=\"upper-links  pull-right\">\n                  <a class=\"links\" href=\"http://clashhacks.in/\">\n                      <svg class=\"\" width=\"16px\" height=\"12px\" style=\"overflow: visible;\">\n                          <path d=\"M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z\" fill=\"#fff\"></path>\n                      </svg>\n                  </a>\n              </li>\n              <li class=\"upper-links dropdown  pull-right\"><a class=\"links\" href=\"http://clashhacks.in/\">Dropdown</a>\n                  <ul class=\"dropdown-menu\">\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://yazilife.com/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://hacksociety.tech/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://clashhacks.in/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://clashhacks.in/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://clashhacks.in/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://clashhacks.in/\">Link</a></li>\n                      <li class=\"profile-li\"><a class=\"profile-links\" href=\"http://clashhacks.in/\">Cart</a></li>\n                  </ul>\n              </li>\n          </ul>\n      </div>\n      <div class=\"row row2\">\n          <div class=\"col-sm-2\">\n              <h2 style=\"margin:0px;\"><span class=\"smallnav menu\" onclick=\"openNav()\">☰ Guitar</span></h2>\n              <h1 style=\"margin:0px; cursor: pointer;\" routerLink=\"/home\"><span class=\"largenav\">Guitar</span></h1>\n          </div>\n          <div class=\"flipkart-navbar-search smallsearch col-sm-8 col-xs-11\">\n              <div class=\"row\">\n                  <input class=\"flipkart-navbar-input col-xs-11 col-sm-9 col-sm-9\" #input type=\"\" (keyup.enter)=\"searchProduct(input)\"   placeholder=\"Search for Products, Brands and more\" name=\"\">\n                  <button class=\"flipkart-navbar-button col-xs-1 col-sm-1 col-md-1\" (click)=\"searchProduct(input)\">\n                      <svg width=\"15px\" height=\"30px\">\n                          <path d=\"M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 \"></path>\n                      </svg>\n                  </button>\n              </div>\n          </div>\n          <div class=\"cart largenav col-sm-2\">\n              <a class=\"cart-button\" routerLink=\"/checkout\" routerLinkActive=\"active\">\n                  <svg class=\"cart-svg \" width=\"16 \" height=\"16 \" viewBox=\"0 0 16 16 \">\n                      <path d=\"M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 \" fill=\"#fff \"></path>\n                  </svg> Cart\n                  <span class=\"item-number \">{{service.cart.length}}</span>\n              </a>\n          </div>\n      </div>\n  </div>\n</div>\n<div id=\"mySidenav\" class=\"sidenav\">\n  <div class=\"container\" style=\"background-color: #2874f0; padding-top: 10px;\">\n      <span class=\"sidenav-heading\">Home</span>\n      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">×</a>\n  </div>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n  <a href=\"#\">Link</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, service) {
        this.route = route;
        this.service = service;
        this.count = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.count = this.service.getProductCount();
    };
    HeaderComponent.prototype.searchProduct = function (input) {
        //alert(input.value)
        this.route.navigateByUrl("/home?q=" + input.value);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty{\r\n    text-align: center;\r\n    padding: 150px 0px 150px 0px;\r\n}"

/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty container\" >\n    <h3>Your order has been confirm </h3>\n        <button type=\"button\" class=\"btn btn-default\"  routerLink=\"/home\">\n            <span class=\"glyphicon glyphicon-shopping-cart\"></span> Continue Shopping\n        </button>\n</div>"

/***/ }),

/***/ "./src/app/components/order-confirmation/order-confirmation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/order-confirmation/order-confirmation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent(http) {
        this.http = http;
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.http.cart = [];
    };
    OrderConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-confirmation',
            template: __webpack_require__(/*! ./order-confirmation.component.html */ "./src/app/components/order-confirmation/order-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./order-confirmation.component.css */ "./src/app/components/order-confirmation/order-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/components/shoping-filters/shoping-filters.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/shoping-filters/shoping-filters.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n  color: #000;\r\n}\r\nlabel {\r\n  cursor: pointer;\r\n}\r\n#menu-toggle {\r\n  display: none;\r\n}\r\n#menu {\r\n  overflow: hidden;\r\n  max-height: 0;\r\n  padding: 0;\r\n  -webkit-transition: all 0.3s ease;\r\n}\r\n#menu-toggle:checked + #menu {\r\n  max-height: 100px;\r\n}\r\n/* The container */\r\n.avability-checkmark {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 12px;\r\n  cursor: pointer;\r\n  font-size: 22px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n/* Hide the browser's default checkbox */\r\n.avability-checkmark input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n/* Create a custom checkbox */\r\n.checkmark {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #fff;\r\n  border: 1px solid #000;\r\n}\r\n/* When the checkbox is checked, add a blue background */\r\n.avability-checkmark input:checked ~ .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n.avability-checkmark:hover .checkmark {\r\n  background-color: #2196F3;\r\n}\r\n/* Create the checkmark/indicator (hidden when not checked) */\r\n.checkmark:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: none;\r\n}\r\n/* Show the checkmark when checked */\r\n.avability-checkmark input:checked ~ .checkmark:after {\r\n  display: block;\r\n}\r\n.avability-checkmark:hover span.checkmark:after {\r\n  display:block;\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg); \r\n    \r\n}\r\n/* Style the checkmark/indicator */\r\n.avability-checkmark .checkmark:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\nli label{\r\n  font-size: .8em;\r\n}"

/***/ }),

/***/ "./src/app/components/shoping-filters/shoping-filters.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/shoping-filters/shoping-filters.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aside-fileter\">\n  <div class=\"col-md-12 col-sm-12\">\n    <div class=\"inner-filter-avblt\">\n      <label for=\"menu-toggle\">\n        <strong>AVABILITY</strong>\n        <span class=\"caret\"></span>\n      </label>\n      <input type=\"checkbox\" id=\"menu-toggle\" checked/>\n      <ul id=\"menu\">\n        <li>\n          <label class=\"avability-checkmark\">Exclude Out-of-stock\n            <input type=\"checkbox\">\n            <span class=\"checkmark\"></span>\n          </label>\n        </li>\n      </ul>\n    </div>\n    <div class=\"inner-filter-avblt\">\n        <label for=\"menu-toggle\">\n          <strong>CATEGORY</strong>\n          <span class=\"caret\"></span>\n        </label>\n        <input type=\"checkbox\" id=\"menu-toggle\" checked/>\n        <ul id=\"menu\">\n          <li>\n            <label class=\"avability-checkmark\">New\n              <input type=\"checkbox\">\n              <span class=\"checkmark\"></span>\n            </label>\n          </li>\n          <li>\n              <label class=\"avability-checkmark\">Open\n                <input type=\"checkbox\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </li>\n        </ul>\n      </div>\n      <div class=\"inner-filter-avblt\">\n          <label for=\"menu-toggle\">\n            <strong>NO OF STRINGS</strong>\n            <span class=\"caret\"></span>\n          </label>\n          <input type=\"checkbox\" id=\"menu-toggle\" checked/>\n          <ul id=\"menu\">\n            <li>\n              <label class=\"avability-checkmark\">2\n                <input type=\"checkbox\">\n                <span class=\"checkmark\"></span>\n              </label>\n            </li>\n            <li>\n                <label class=\"avability-checkmark\">4\n                  <input type=\"checkbox\">\n                  <span class=\"checkmark\"></span>\n                </label>\n              </li>\n              <li>\n                  <label class=\"avability-checkmark\">6\n                    <input type=\"checkbox\">\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </li>\n          </ul>\n        </div>\n        <div class=\"inner-filter-avblt\">\n            <label for=\"menu-toggle\">\n              <strong>BRAND</strong>\n              <span class=\"caret\"></span>\n            </label>\n            <input type=\"checkbox\" id=\"menu-toggle\" checked/>\n            <ul id=\"menu\">\n              <li>\n                <label class=\"avability-checkmark\">Yamaha\n                  <input type=\"checkbox\">\n                  <span class=\"checkmark\"></span>\n                </label>\n              </li>\n              <li>\n                  <label class=\"avability-checkmark\">Zoom\n                    <input type=\"checkbox\">\n                    <span class=\"checkmark\"></span>\n                  </label>\n                </li>\n                <li>\n                    <label class=\"avability-checkmark\">Fender\n                      <input type=\"checkbox\">\n                      <span class=\"checkmark\"></span>\n                    </label>\n                  </li>\n                  <li>\n                      <label class=\"avability-checkmark\">Samson\n                        <input type=\"checkbox\">\n                        <span class=\"checkmark\"></span>\n                      </label>\n                    </li>\n            </ul>\n          </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shoping-filters/shoping-filters.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/shoping-filters/shoping-filters.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShopingFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingFiltersComponent", function() { return ShopingFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopingFiltersComponent = /** @class */ (function () {
    function ShopingFiltersComponent(fb) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
    }
    ShopingFiltersComponent.prototype.ngOnInit = function () {
    };
    ShopingFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoping-filters',
            template: __webpack_require__(/*! ./shoping-filters.component.html */ "./src/app/components/shoping-filters/shoping-filters.component.html"),
            styles: [__webpack_require__(/*! ./shoping-filters.component.css */ "./src/app/components/shoping-filters/shoping-filters.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ShopingFiltersComponent);
    return ShopingFiltersComponent;
}());



/***/ }),

/***/ "./src/app/components/shoping-home/shoping-home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/shoping-home/shoping-home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.col-item\r\n{\r\n    border: 1px solid #E1E1E1;\r\n    border-radius: 5px;\r\n    background: #FFF;\r\n    margin:2px 0px 10px;\r\n}\r\n\r\n.photo{\r\n    text-align: center;\r\n}\r\n\r\n.col-item .photo img\r\n{\r\n    margin: 0 auto;\r\n}\r\n\r\n.col-item .info\r\n{\r\n    padding: 10px;\r\n    border-radius: 0 0 5px 5px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.col-item:hover  {\r\n    box-shadow: 4px 0px 11px 0px gray;\r\n    cursor: pointer;\r\n}\r\n\r\n.col-item .price h5\r\n{\r\n    line-height: 20px;\r\n    margin: 0;\r\n}\r\n\r\n.price-text-color\r\n{\r\n    color: #219FD1;\r\n}\r\n\r\n.col-item .info .rating\r\n{\r\n    color: #777;\r\n}\r\n\r\n.col-item .rating\r\n{\r\n    /*width: 50%;*/\r\n    font-size: 17px;\r\n    text-align: right;\r\n    line-height: 52px;\r\n    margin-bottom: 10px;\r\n    height: 52px;\r\n    position: absolute;\r\n    right:30px;\r\n}\r\n\r\n.col-item .separator\r\n{\r\n    border-top: 1px solid #E1E1E1;\r\n}\r\n\r\n.clear-left\r\n{\r\n    clear: left;\r\n}\r\n\r\n.col-item .separator p\r\n{\r\n    line-height: 20px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.col-item .separator p i\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.col-item .btn-add\r\n{\r\n    width: 50%;\r\n    float: left;\r\n    border-right: 1px solid #E1E1E1;\r\n}\r\n\r\n.col-item .btn-add:hover\r\n{\r\n   color: #219FD1;\r\n   font-weight: bold;\r\n}\r\n\r\n.col-item .btn-details\r\n{\r\n    width: 50%;\r\n    float: left;\r\n    padding-left: 10px;\r\n}\r\n\r\n.controls\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n[data-slide=\"prev\"]\r\n{\r\n    margin-right: 10px;\r\n}\r\n\r\n.price{\r\n    font-size:1.5em;\r\n    color:red;\r\n}\r\n\r\n.container-fluid{\r\n    padding:1em;\r\n}"

/***/ }),

/***/ "./src/app/components/shoping-home/shoping-home.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/shoping-home/shoping-home.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      \n  <app-shoping-filters class=\"side-filters\"></app-shoping-filters> \n    </div>\n\n    <div class=\"col-md-10\" >\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-6 col-lg-3\" *ngFor=\"let product of products\">\n            <div class=\"col-item\">\n                <div class=\"rating hidden-sm col-md-6 pull-right\">\n                    <i class=\"price-text-color fa fa-star\"></i>\n                    <i class=\"price-text-color fa fa-star\">\n                    </i>\n                    <i class=\"price-text-color fa fa-star\"></i>\n                    <i class=\"price-text-color fa fa-star\">\n                    </i>\n                    <i class=\"fa fa-star\"> </i>\n                  </div> \n              <div class=\"photo\">\n                <img src=\"./assets/images/{{product.id}}.jpg\" class=\"img-responsive\" alt=\"a\" />\n              </div>\n              <div class=\"info\">\n                  <span class=\"price\">Rs. {{product.price}}</span>\n                  <h5> {{product.name}}</h5>\n                  <p>Model is awesome</p>\n                  \n                 \n                <div class=\"separator clear-left\">\n                  <p class=\"btn-add\" (click)=\"addtocart(product)\">\n                    <i class=\"fa fa-shopping-cart\"></i>\n                    Add to cart\n                  </p>\n                  <p class=\"btn-details\">\n                    <i class=\"fa fa-list\"></i>\n                   More details\n                  </p>\n                </div>\n                <div class=\"clearfix\">\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n     \n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/shoping-home/shoping-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/shoping-home/shoping-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShopingHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingHomeComponent", function() { return ShopingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopingHomeComponent = /** @class */ (function () {
    function ShopingHomeComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.router.events.subscribe(function (e) {
            if (e.state && e.state.root && e.state.root.queryParams && e.state.root.queryParams) {
                _this.http.getProduct().subscribe(function (resp) {
                    _this.products = resp.filter(function (obj) {
                        if (e.state.root.queryParams.q) {
                            return obj.name.toLocaleLowerCase().indexOf(e.state.root.queryParams.q.toLocaleLowerCase()) != -1;
                        }
                        else {
                            return obj;
                        }
                        ;
                    });
                });
            }
        });
    }
    ShopingHomeComponent.prototype.addtocart = function (prod) {
        this.http.addToCart(prod);
    };
    ShopingHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getProduct().subscribe(function (resp) {
            _this.products = resp;
        });
    };
    ShopingHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoping-home',
            template: __webpack_require__(/*! ./shoping-home.component.html */ "./src/app/components/shoping-home/shoping-home.component.html"),
            styles: [__webpack_require__(/*! ./shoping-home.component.css */ "./src/app/components/shoping-home/shoping-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], ShopingHomeComponent);
    return ShopingHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
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

var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent() {
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/components/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var modules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.cart = [];
    }
    ProductsService.prototype.getProduct = function () {
        return this.http.get("./assets/products.json");
    };
    ProductsService.prototype.addToCart = function (product) {
        product["qty"] = 1;
        this.cart.forEach(function (obj) {
            if (obj.id == product.id) {
                product["qty"]++;
            }
        });
        var list = this.cart.filter(function (obj) {
            return obj.id == product.id;
        });
        if (list.length == 0) {
            this.cart.push(product);
        }
    };
    ProductsService.prototype.getProductfromCart = function () {
        return this.cart;
    };
    ProductsService.prototype.getProductCount = function () {
        return this.cart.length;
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-card>\n  \n</mat-card>\n"

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
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

var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.answer = '';
        this.answerDisplay = '';
        this.showSpinner = false;
    }
    TodosComponent.prototype.showAnswer = function () {
        var _this = this;
        this.showSpinner = true;
        setTimeout(function () {
            _this.answerDisplay = _this.answer;
            _this.showSpinner = false;
        }, 2000);
    };
    TodosComponent.prototype.ngOnInit = function () {
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Guitar\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map