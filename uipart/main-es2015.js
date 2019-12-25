(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n<app-dashboard></app-dashboard>\n<router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-dialog/dashboard-dialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-dialog/dashboard-dialog.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-12\" id=\"screensize\">\n                <div class=\"row\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <table class=\"table table-borderless\">\n\n                                    <tbody>\n                                        <tr>\n                                            <td>Eyecolor</td>\n                                            <td>{{specificdetails_array.appearance.eyeColor}}</td>\n                                            <td>Gender</td>\n                                            <td>{{specificdetails_array.appearance.gender}}</td>\n                                        </tr>\n                                        <tr>\n\n                                            <td>Haircolor</td>\n                                            <td>{{specificdetails_array.appearance.hairColor}}</td>\n                                            <td>Race</td>\n                                            <td>{{specificdetails_array.appearance.race}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"col-sm-4 text-center\">\n                                <p><img class=\" img-fluid\" src=\"{{ specificdetails_array.images.sm}}\" alt=\"card image\">\n                                </p>\n                                <p>{{ specificdetails_array.name}}<p>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <table class=\"table table-border\">\n                                    <tbody>\n                                        <tr>\n                                            <td>Feet</td>\n                                            <td>{{specificdetails_array.appearance.height[0]}}</td>\n                                            <td>Cms</td>\n                                            <td>{{specificdetails_array.appearance.height[1]}}</td>\n                                        </tr>\n                                        <tr>\n\n                                            <td>lb</td>\n                                            <td>{{specificdetails_array.appearance.weight[0]}}</td>\n                                            <td>Kgs</td>\n                                            <td>{{specificdetails_array.appearance.weight[1]}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"card\">\n                            <table class=\"table table-borderless\">\n                                <tbody>\n                                    <tr>\n                                        <td>Groupaffiliation</td>\n                                        <td>{{specificdetails_array.connections.groupAffiliation}}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>relatives</td>\n                                        <td>{{specificdetails_array.connections.relatives}}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Slug</td>\n                                        <td>{{specificdetails_array.slug}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"card-header\">Biography\n                                        <table class=\"table table-borderless\">\n\n                                            <tbody>\n                                                <tr>\n                                                    <td>Fullname</td>\n                                                    <td>{{specificdetails_array.biography.fullName}}</td>\n                                                    <td>Place of birth</td>\n                                                    <td>{{specificdetails_array.biography.placeOfBirth}}</td>\n                                                </tr>\n                                                <tr>\n\n                                                    <td>Alignment</td>\n                                                    <td>{{specificdetails_array.biography.alignment}}</td>\n                                                    <td>Firstappearance</td>\n                                                    <td>{{specificdetails_array.biography.firstAppearance}}</td>\n                                                </tr>\n                                                <tr>\n                                                    <td>AlterEgos</td>\n                                                    <td>{{specificdetails_array.biography.alterEgos}}</td>\n                                                    <td>Publisher</td>\n                                                    <td>{{specificdetails_array.biography.publisher}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                        <table>\n                                            <tbody>\n                                                <thead>\n                                                    <tr>\n                                                        <th>Aliases</th>\n                                                    </tr>\n                                                </thead>\n                                                <tr\n                                                    *ngFor=\"let i of specificdetails_array.biography.aliases;index as no;\">\n                                                    <td>{{no +1}}:{{i}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"card-footer\">\n                                <table class=\"table table-borderless\">\n                                    <tbody>\n                                        <tr>\n                                            <td>Base</td>\n                                            <td>{{ specificdetails_array.work.base}}</td>\n                                        </tr>\n                                        <tr>\n\n                                            <td>Occupation</td>\n                                            <td>{{ specificdetails_array.work.occupation}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <mat-dialog-actions style=\"align-items: flex-end\">\n                <button mat-button mat-dialog-close (click)=\"test();\">Cancel</button>\n            </mat-dialog-actions>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <!-- <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a> -->\n      </li>\n      <li class=\"nav-item\">\n        <!-- <a class=\"nav-link\" href=\"#\">Link</a> -->\n      </li>\n      <!-- <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Filters\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li> -->\n      <!-- <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li> -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" #s\n        placeholder=\"Search by Name\" aria-label=\"Search\">\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-autocomplete>\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"ownfilter(s.value)\"\n        type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<!-- <form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" placeholder=\"filter by name\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form> -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- <h3 class=\"section-title h1\">Marvel</h3> -->\n    <div class=\"col-sm-12\" id=\"table\">\n      <section id=\"team\" class=\"pb-5\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- Team member -->\n            <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let item of getallDetailarray;\">\n              <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\n                <div class=\"mainflip\">\n                  <div class=\"frontside\">\n                    <div class=\"card\">\n                      <div class=\"card-body text-center\">\n                        <p><img class=\" img-fluid\" src=\"{{ item.images.md}}\" alt=\"card image\"></p>\n                        <h4 class=\"card-title\">{{item.name}}</h4>\n                        <p class=\"card-text\">{{item.biography.fullName || \"\"}}</p>\n                        <div>\n                          <span class=\"badge badge-info\">Occupation</span> {{ item.work.occupation}}\n                        </div>\n                        <!-- <a href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-plus\"></i></a> -->\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"backside\">\n                    <div class=\"card\">\n                      <div class=\"card-body text-center mt-4 \">\n                        <h4 class=\"card-title\">{{item.name}}</h4>\n                        <div class=\"table-responsive\">\n                          <table class=\"table\">\n                            <thead>\n                              <tr>\n                                <th>Eyecolor</th>\n                                <th>Gender</th>\n                                <th>Haircolor</th>\n                                <th>Race</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <td> {{ item.appearance.eyeColor  }}</td>\n                                <td> {{ item.appearance.gender  }}</td>\n                                <td> {{ item.appearance.hairColor  }}</td>\n                                <td>{{ item.appearance.race  }}</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n\n                        <!-- <button mat-button >Open dialog</button> -->\n                        <div class=\"form-group\">\n                          <div class=\"form-inline\">\n                            <label class=\"badge badge-info\" for=\"email\">Power </label>&nbsp;&nbsp;&nbsp;\n                            <span> {{ item.powerstats.power  }}</span>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <div class=\"form-inline\">\n                            <label class=\"badge badge-info\" for=\"email\">Speed </label>&nbsp;&nbsp;&nbsp;\n                            <span> {{ item.powerstats.speed  }}</span>\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <div class=\"form-inline\">\n                            <label class=\"badge badge-info\" for=\"email\">Strength </label>&nbsp;&nbsp;&nbsp;\n                            <span> {{ item.powerstats.strength  }}</span>\n                          </div>\n                        </div>\n                        <div class=\"form-group\">\n                          <div class=\"text-center\">\n                            <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"openDialog(item);\"\n                              type=\"button\">know more</button>\n\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n              <br>\n              <br>\n            </div>\n            <br>\n\n          </div>\n        </div>\n      </section>\n      <!-- Team -->\n\n    </div>\n  </div>\n</div>\n\n\n<!-- Team -->\n<!-- <div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-8\" id=\"table\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\" *ngFor=\"let item of getallDetailarray;\">\n          <div class=\"card\" (click)=\"getByid(item.id);\">              \n            <img class=\"card-img-top\" src=\"{{ item.images.md}}\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{item.name}}</h5>\n\n              FullName<mat-card-subtitle>{{item.biography.fullName || \"--\"}}</mat-card-subtitle>\n              <br>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Eyecolor </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.appearance.eyeColor  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Gender </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.appearance.gender  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Haircolor </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.appearance.hairColor  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Race </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.appearance.race  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Power </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.powerstats.power  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Speed </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.powerstats.speed  }}</span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"form-inline\">\n                  <label class=\"badge badge-info\" for=\"email\">Strength </label>&nbsp;&nbsp;&nbsp;\n                  <span> {{ item.powerstats.strength  }}</span>\n                </div>\n              </div>\n\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">\n                <dt>Occupation</dt>\n                <dd> {{ item.work.occupation }} </dd>\n              </small>\n            </div>\n          </div><br>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"col-sm-3\" id=\"table2\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar\n            [ngStyle]=\"{'background': 'url(' + selectedArrayDetails.images.sm + ') no-repeat 0 0 / cover'}\"></div>\n          <mat-card-title>{{selectedArrayDetails.name}}</mat-card-title>\n          <mat-card-subtitle>{{selectedArrayDetails.appearance.gender}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{selectedArrayDetails.images.md}}\" height=\"250\">\n        <mat-card-content>\n          <div class=\"row\">            \n            <mat-card-subtitle>Biography</mat-card-subtitle>\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Aliases</th>\n                    <th>Alignment</th>\n                    <th>AlterEgos</th>\n                    <th>FirstAppearance</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td> {{ selectedArrayDetails.biography.aliases[0] }}</td>\n                    <td> {{ selectedArrayDetails.biography.alignment }}</td>\n                    <td> {{ selectedArrayDetails.biography.alterEgos }}</td>\n                    <td>{{ selectedArrayDetails.biography.firstAppearance }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>FullName</th>\n                    <th>PlaceOfBirth</th>\n                    <th>Publisher</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{ selectedArrayDetails.biography.fullName }}</td>\n                    <td>{{ selectedArrayDetails.biography.placeOfBirth }}</td>\n                    <td>{{ selectedArrayDetails.biography.publisher }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <mat-card-subtitle>Appearance</mat-card-subtitle>\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\">\n                <thead>\n                  <tr>\n                    <th>Eyecolor</th>\n                    <th>Gender</th>\n                    <th>Haircolor</th>\n                    <th>Race</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td> {{ selectedArrayDetails.appearance.eyeColor }}</td>\n                    <td> {{ selectedArrayDetails.appearance.gender }}</td>\n                    <td> {{ selectedArrayDetails.appearance.hairColor }}</td>\n                    <td>{{ selectedArrayDetails.appearance.race }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <mat-card-subtitle>Height</mat-card-subtitle>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th>feet</th>\n                      <th>cm</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td> {{ selectedArrayDetails.appearance.height[0] }}</td>\n                      <td> {{ selectedArrayDetails.appearance.height[1] }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n              <mat-card-subtitle>Weight</mat-card-subtitle>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th>lb</th>\n                      <th>kg</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td> {{ selectedArrayDetails.appearance.weight[0] }}</td>\n                      <td> {{ selectedArrayDetails.appearance.weight[1] }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n\n         \n\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <mat-card-subtitle>Powerstats</mat-card-subtitle>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th>Combat</th>\n                      <th>Durability</th>\n                      <th>Intelligence</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td> {{ selectedArrayDetails.powerstats.combat }}</td>\n                      <td> {{ selectedArrayDetails.powerstats.durability }}</td>\n                      <td> {{ selectedArrayDetails.powerstats.intelligence }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"table-responsive\">\n                <table class=\"table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th>Power</th>\n                      <th>Speed</th>\n                      <th>Strength</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td> {{ selectedArrayDetails.powerstats.power }}</td>\n                      <td> {{ selectedArrayDetails.powerstats.speed }}</td>\n                      <td> {{ selectedArrayDetails.powerstats.strength }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </mat-card-actions>\n        <mat-card-footer>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <dt>Base</dt>\n              <dd> {{ selectedArrayDetails.work.base }} </dd>\n              <dt>Occupation</dt>\n              <dd> {{ selectedArrayDetails.work.occupation }} </dd>\n              <dt>Group Affiliation</dt>\n              <dd> {{ selectedArrayDetails.connections.groupAffiliation }} </dd>\n              <dt>Relatives</dt>\n              <dd> {{ selectedArrayDetails.connections.relatives }} </dd>\n            </div>\n          </div>\n        </mat-card-footer>\n      </mat-card>\n     \n    </div>\n  </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://akabab.github.io/superhero-api/api/all.json";
    }
    getallDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.get(this.baseurl).subscribe(res => {
                    resolve(res);
                }, err => {
                    resolve(err);
                });
            }).catch(e => {
                console.log(e);
                return;
            });
        });
    }
    getallDetail_byid(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.http.post("/getdetailsbyid", "id=" + id).subscribe(res => {
                    resolve(res);
                }, err => {
                    resolve(err);
                });
            }).catch(e => {
                console.log(e);
                return;
            });
        });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-dialog/dashboard-dialog.component */ "./src/app/dashboard-dialog/dashboard-dialog.component.ts");




const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        entryComponents: [_dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDialogComponent"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Sp';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-dialog/dashboard-dialog.component */ "./src/app/dashboard-dialog/dashboard-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _appMaterial_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appMaterial.module */ "./src/app/appMaterial.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DashboardDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _appMaterial_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/appMaterial.module.ts":
/*!***************************************!*\
  !*** ./src/app/appMaterial.module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/dashboard-dialog/dashboard-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-dialog/dashboard-dialog.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n#screensize{\n    overflow:scroll;\n    /* width:100%; */\n    height:90.67vh;\n    padding-top:0%;\n    padding-bottom:2%;\n    display:block;\n }\n::-webkit-scrollbar {\n    display: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLWRpYWxvZy9kYXNoYm9hcmQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBRUE7SUFDRyxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQtZGlhbG9nL2Rhc2hib2FyZC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuI3NjcmVlbnNpemV7XG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgIC8qIHdpZHRoOjEwMCU7ICovXG4gICAgaGVpZ2h0OjkwLjY3dmg7XG4gICAgcGFkZGluZy10b3A6MCU7XG4gICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgZGlzcGxheTpibG9jaztcbiB9XG5cbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/dashboard-dialog/dashboard-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-dialog/dashboard-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDialogComponent", function() { return DashboardDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DashboardDialogComponent = class DashboardDialogComponent {
    constructor(dialog, dat) {
        this.dialog = dialog;
        this.dat = dat;
        this.specificdetails_array = [];
        this.specificdetails_array.length = 0;
        this.specificdetails_array = dat;
        console.log(this.specificdetails_array);
    }
    ngOnInit() {
    }
    test() {
        this.dialog.closeAll();
    }
};
DashboardDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DashboardDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard-dialog/dashboard-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-dialog.component.css */ "./src/app/dashboard-dialog/dashboard-dialog.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DashboardDialogComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n    max-width: 400px;\n  }\n  \n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n  \n  .mat-card-image {\n    width: calc(100% + 32px);\n    margin: 0 -16px 16px -16px;\n}\n  \n  #table{\n    overflow:scroll;\n    /* width:100%; */\n    height:90.67vh;\n    padding-top:0%;\n    padding-bottom:2%;\n    display:block;\n }\n  \n  .example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  \n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  #table2{\n  overflow-y:scroll;\n  height:850px;\n  display:block;\n}\n  \n  ::-webkit-scrollbar {\n  display: none;\n}\n  \n  .example-container {\n  display: flex;\n  flex-direction: column;\n}\n  \n  .example-container > * {\n  width: 100%;\n}\n  \n  /* FontAwesome for working BootSnippet :> */\n  \n  #team {\n    background: #eee !important;\n}\n  \n  .btn-primary:hover,\n.btn-primary:focus {\n    background-color: #108d6f;\n    border-color: #108d6f;\n    box-shadow: none;\n    outline: none;\n}\n  \n  .btn-primary {\n    color: #fff;\n    background-color: #007b5e;\n    border-color: #007b5e;\n}\n  \n  .example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  \n  section {\n    padding: 60px 0;\n}\n  \n  section .section-title {\n    text-align: center;\n    color: #007b5e;\n    margin-bottom: 50px;\n    text-transform: uppercase;\n}\n  \n  #team .card {\n    border: none;\n    background: #ffffff;\n}\n  \n  .image-flip:hover .backside,\n.image-flip.hover .backside {\n    transform: rotateY(0deg);\n    border-radius: .25rem;\n}\n  \n  .image-flip:hover .frontside,\n.image-flip.hover .frontside {\n    transform: rotateY(180deg);\n}\n  \n  .mainflip {\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -moz-transition: 1s;\n    -moz-transform: perspective(1000px);\n    -moz-transform-style: preserve-3d;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n    position: relative;\n}\n  \n  .frontside {\n    position: relative;\n    -webkit-transform: rotateY(0deg);\n    -ms-transform: rotateY(0deg);\n    z-index: 2;\n    margin-bottom: 30px;\n}\n  \n  .backside {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: white;\n    transform: rotateY(-180deg);\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\n}\n  \n  .frontside,\n.backside {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transition: 1s;\n    -webkit-transform-style: preserve-3d;\n    -moz-transition: 1s;\n    -moz-transform-style: preserve-3d;\n    -o-transition: 1s;\n    -o-transform-style: preserve-3d;\n    -ms-transition: 1s;\n    -ms-transform-style: preserve-3d;\n    transition: 1s;\n    transform-style: preserve-3d;\n}\n  \n  .frontside .card,\n.backside .card {\n    min-height: 312px;\n}\n  \n  .backside .card a {\n    font-size: 18px;\n    color: #007b5e !important;\n}\n  \n  .frontside .card .card-title,\n.backside .card .card-title {\n    color: #007b5e !important;\n}\n  \n  .frontside .card .card-body img {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLHNCQUFzQjtFQUN4Qjs7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0VBRUU7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEI7O0VBQ0E7O0VBRUMsaUJBQWlCO0FBQ25COztFQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBR0Q7RUFDQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7RUFFQztFQUNDLGFBQWE7QUFDZjs7RUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBRUEsMkNBQTJDOztFQUczQztJQUNJLDJCQUEyQjtBQUMvQjs7RUFFQTs7SUFFSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztFQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0VBQ0E7O0VBRUUsaUJBQWlCO0FBQ25COztFQUVBO0lBQ0ksZUFBZTtBQUNuQjs7RUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7RUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0VBRUE7O0lBTUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7RUFFQTs7SUFLSSwwQkFBMEI7QUFDOUI7O0VBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsaUJBQWlCO0lBS2pCLDJCQUEyQjtJQUczQiwrQ0FBK0M7QUFDbkQ7O0VBRUE7O0lBRUksbUNBQW1DO0lBR25DLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7O0VBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztFQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7RUFFQTs7SUFFSSx5QkFBeUI7QUFDN0I7O0VBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfSAgXG4gIC5tYXQtY2FyZC1pbWFnZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICAgIG1hcmdpbjogMCAtMTZweCAxNnB4IC0xNnB4O1xufVxuIFxuICAjdGFibGV7XG4gICAgb3ZlcmZsb3c6c2Nyb2xsO1xuICAgIC8qIHdpZHRoOjEwMCU7ICovXG4gICAgaGVpZ2h0OjkwLjY3dmg7XG4gICAgcGFkZGluZy10b3A6MCU7XG4gICAgcGFkZGluZy1ib3R0b206MiU7XG4gICAgZGlzcGxheTpibG9jaztcbiB9XG4gLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG5cbiAjdGFibGUye1xuICBvdmVyZmxvdy15OnNjcm9sbDtcbiAgaGVpZ2h0Ojg1MHB4O1xuICBkaXNwbGF5OmJsb2NrO1xufVxuXG4gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEZvbnRBd2Vzb21lIGZvciB3b3JraW5nIEJvb3RTbmlwcGV0IDo+ICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcbiN0ZWFtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOGQ2ZjtcbiAgICBib3JkZXItY29sb3I6ICMxMDhkNmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiNWU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YjVlO1xufVxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwO1xufVxuXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMwMDdiNWU7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jdGVhbSAuY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5pbWFnZS1mbGlwOmhvdmVyIC5iYWNrc2lkZSxcbi5pbWFnZS1mbGlwLmhvdmVyIC5iYWNrc2lkZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbn1cblxuLmltYWdlLWZsaXA6aG92ZXIgLmZyb250c2lkZSxcbi5pbWFnZS1mbGlwLmhvdmVyIC5mcm9udHNpZGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLm1haW5mbGlwIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwMHB4KTtcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcm9udHNpZGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmJhY2tzaWRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDdweCA5cHggLTRweCByZ2IoMTU4LCAxNTgsIDE1OCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDlweCAtNHB4IHJnYigxNTgsIDE1OCwgMTU4KTtcbn1cblxuLmZyb250c2lkZSxcbi5iYWNrc2lkZSB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcztcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLW8tdHJhbnNpdGlvbjogMXM7XG4gICAgLW8tdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAtbXMtdHJhbnNpdGlvbjogMXM7XG4gICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCxcbi5iYWNrc2lkZSAuY2FyZCB7XG4gICAgbWluLWhlaWdodDogMzEycHg7XG59XG5cbi5iYWNrc2lkZSAuY2FyZCBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC10aXRsZSxcbi5iYWNrc2lkZSAuY2FyZCAuY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDdiNWUgIWltcG9ydGFudDtcbn1cblxuLmZyb250c2lkZSAuY2FyZCAuY2FyZC1ib2R5IGltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard-dialog/dashboard-dialog.component */ "./src/app/dashboard-dialog/dashboard-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let DashboardComponent = class DashboardComponent {
    constructor(Api, dialog) {
        this.Api = Api;
        this.dialog = dialog;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.options = [];
        this.getallDetailarray = [];
        this.getallDetailarray1 = [1, 2, 3, 4, 5, 6, 7];
        this.selectedArrayDetails = [];
        this.filterarray = [];
    }
    ngOnInit() {
        this.alldetails();
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    openDialog(data) {
        // console.log(data)
        // const dialogRef = this.dialog.open(DashboardDialogComponent);
        const dialogRef = this.dialog.open(_dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DashboardDialogComponent"], {
            data: data,
        });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(`Dialog result: ${result}`);
        // });
    }
    openDialog1() {
        const dialogRef = this.dialog.open(_dashboard_dialog_dashboard_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DashboardDialogComponent"]);
    }
    alldetails() {
        this.options.length = 0;
        this.getallDetailarray.length = 0;
        this.Api.getallDetail().then(res => {
            this.getallDetailarray = res;
            // this.options = res;      
            res.forEach((i) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.options.push(i.name);
            }));
            // console.log(this.getallDetailarray,"array")
            // this.ownfilter(1);
        });
    }
    selecteditem(data) {
        console.log(data, "selected");
        this.selectedArrayDetails.length = 0;
        this.selectedArrayDetails = data;
        // console.log(this.selectedArrayDetails)
    }
    ownfilter(data) {
        console.log(data, "own fileter");
        this.getallDetailarray.filter((i) => {
            if (i.id == data || i.name == data || i.biography.fullName == data) {
                this.selectedArrayDetails = i;
                console.log(i, "asdf");
                this.getByid(i.id);
                // this.openDialog(i);        
                // console.log(this.selectedArrayDetails,"filter")
            }
        });
    }
    getByid(id) {
        console.log(id, "get by id");
        this.Api.getallDetail_byid(id).then(res => {
            console.log(res, "res of get by id");
            this.openDialog(res);
            this.selectedArrayDetails = res;
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aishyawariya/ram/AngularMaterialSuperHeroApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map