webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.user = {};
    }
    // ngOnInit(){
    //   this.loadUsers();
    // }
    // loadUsers(){
    //   this.apiProvider.getUsers().subscribe(data => this.user =data["_embedded"]["users"],
    // err => {
    //   console.log(err);
    // });
    // }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.test = function (createAccountInfo) {
        console.log(createAccountInfo);
        this.apiProvider.saveUser(createAccountInfo).subscribe(console.log);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>sign-up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="signUp-box">\n    <form #registerForm="ngForm" (ng-submit)="test(registerForm.value)">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="name" required [(ngModel)]="Username" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Email" name="email" required [(ngModel)]="Email" ></ion-input>\n              </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" required [(ngModel)]="password"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" type="submit" (click)="test(registerForm.value)">Create Account</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamsPage = /** @class */ (function () {
    function MyTeamsPage(navCtrl, navParams, apiProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.toastCtrl = toastCtrl;
    }
    MyTeamsPage.prototype.myButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    MyTeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamsPage');
    };
    MyTeamsPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    MyTeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-teams',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/my-teams/my-teams.html"*/'<!--\n  Generated template for the MyTeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button menuToggle ion- button icon-only>\n      <ion-icon name ="menu"></ion-icon>\n    </button>\n    <ion-title text-center>MyApp</ion-title>\n  </ion-navbar>\n  <ion-toolbar color="secondary">\n    <ion-title text-center><span style ="color:red">my-teams</span></ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>Welcome to my page</h4>\n  <div class="login-box">\n    <form #registerForm="ngForm"  (ng-submit)="myButton()">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="name" required [(ngModel)]="Username" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" required [(ngModel)]="password"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row>\n      <ion-col color="secondary">\n        <button ion-button class="register-btn" block clear (click)="createAccount()">Create Account</button>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/my-teams/my-teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MyTeamsPage);
    return MyTeamsPage;
}());

//# sourceMappingURL=my-teams.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_home_team_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamsPage = /** @class */ (function () {
    function TeamsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teams = [
            { id: 1, name: "Manchester United" },
            { id: 2, name: "Arsenal" },
            { id: 3, name: "Chelsea" }
        ];
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamsPage');
    };
    TeamsPage.prototype.itemTapped = function (_$event, team) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__team_home_team_home__["a" /* TeamHomePage */], team);
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/teams/teams.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>teams</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <button *ngFor="let team of teams" ion-item (click)="itemTapped($event, team)">{{team.name}}</button>\n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_details_team_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__standings_standings__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamHomePage = /** @class */ (function () {
    function TeamHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teamDetailTab = __WEBPACK_IMPORTED_MODULE_2__team_details_team_details__["a" /* TeamDetailsPage */];
        this.standingsTab = __WEBPACK_IMPORTED_MODULE_3__standings_standings__["a" /* StandingsPage */];
    }
    TeamHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamHomePage');
    };
    TeamHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-home',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/team-home/team-home.html"*/'<!--\n  Generated template for the TeamHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>team-home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-tabs>\n  <ion-tab tabTitle="Team" [root]="teamDetailTab" tabIcon="football"></ion-tab>\n  <ion-tab tabTitle="Standings" [root]="standingsTab" tabIcon="podium"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/team-home/team-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeamHomePage);
    return TeamHomePage;
}());

//# sourceMappingURL=team-home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamDetailsPage = /** @class */ (function () {
    function TeamDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.team = {};
        this.team = this.navParams.data;
        console.log('nav params', navParams);
    }
    TeamDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamDetailsPage');
    };
    TeamDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-team-details',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/team-details/team-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{team.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Team Detail</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/team-details/team-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TeamDetailsPage);
    return TeamDetailsPage;
}());

//# sourceMappingURL=team-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StandingsPage = /** @class */ (function () {
    function StandingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StandingsPage');
    };
    StandingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-standings',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/standings/standings.html"*/'<!--\n  Generated template for the StandingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>standings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>Standing Page</h2>\n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/standings/standings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StandingsPage);
    return StandingsPage;
}());

//# sourceMappingURL=standings.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/my-teams/my-teams.module": [
		283,
		6
	],
	"../pages/sign-up/sign-up.module": [
		282,
		5
	],
	"../pages/standings/standings.module": [
		284,
		4
	],
	"../pages/team-details/team-details.module": [
		286,
		3
	],
	"../pages/team-home/team-home.module": [
		285,
		2
	],
	"../pages/teams/teams.module": [
		287,
		1
	],
	"../pages/tournaments/tournaments.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LeagueServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LeagueServiceProvider = /** @class */ (function () {
    function LeagueServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'http://api.football-data.org/v2/competitions/';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Auth-Token': 'd550e63aaf6349f78dd2199f9d2dc115'
            })
        };
        console.log('Hello LeagueServiceProvider Provider');
    }
    LeagueServiceProvider.prototype.load = function () {
        return this.http.get(this.apiUrl, this.httpOptions);
    };
    LeagueServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LeagueServiceProvider);
    return LeagueServiceProvider;
}());

//# sourceMappingURL=league-service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_teams_teams__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_my_teams_my_teams__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tournaments_tournaments__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_team_details_team_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_standings_standings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_team_home_team_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_league_service_league_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tournaments_tournaments__["a" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_details_team_details__["a" /* TeamDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_standings_standings__["a" /* StandingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_team_home_team_home__["a" /* TeamHomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-teams/my-teams.module#MyTeamsPageModule', name: 'MyTeamsPage', segment: 'my-teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/standings/standings.module#StandingsPageModule', name: 'StandingsPage', segment: 'standings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-home/team-home.module#TeamHomePageModule', name: 'TeamHomePage', segment: 'team-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/team-details/team-details.module#TeamDetailsPageModule', name: 'TeamDetailsPage', segment: 'team-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/teams/teams.module#TeamsPageModule', name: 'TeamsPage', segment: 'teams', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tournaments/tournaments.module#TournamentsPageModule', name: 'TournamentsPage', segment: 'tournaments', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_my_teams_my_teams__["a" /* MyTeamsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_teams_teams__["a" /* TeamsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tournaments_tournaments__["a" /* TournamentsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_team_details_team_details__["a" /* TeamDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_standings_standings__["a" /* StandingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_team_home_team_home__["a" /* TeamHomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_up_sign_up__["a" /* SignUpPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_league_service_league_service__["a" /* LeagueServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__["a" /* MyTeamsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.goHome = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_my_teams_my_teams__["a" /* MyTeamsPage */]);
    };
    MyApp.prototype.goToTournaments = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_tournaments_tournaments__["a" /* TournamentsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list>\n        <ion-list-header>NAvigate</ion-list-header>\n        <button menuClose ion-item (click)="goHome()">go home</button> \n        <button menuClose ion-item (click)="goToTournaments()">go to tournamets</button>\n      </ion-list>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams_teams__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_league_service_league_service__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TournamentsPage = /** @class */ (function () {
    function TournamentsPage(navCtrl, navParams, leagueServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leagueServiceProvider = leagueServiceProvider;
        this.getLeagues();
    }
    TournamentsPage.prototype.getLeagues = function () {
        var _this = this;
        this.leagueServiceProvider.load().subscribe(function (data) {
            _this.leagues = data["competitions"];
        });
    };
    TournamentsPage.prototype.name = function (n) {
        console.log(n);
    };
    TournamentsPage.prototype.itemTapped1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teams_teams__["a" /* TeamsPage */]);
    };
    TournamentsPage.prototype.getToteamsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teams_teams__["a" /* TeamsPage */]);
    };
    TournamentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TournamentsPage');
    };
    TournamentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tournaments',template:/*ion-inline-start:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/tournaments/tournaments.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>tournaments</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content color ="secondary">\n    <button ion-button (click)="getToteamsPage()">test</button>\n    <button ion-button class="test" *ngFor="let league of leagues" color="secondary" full (click)="name(league.name)">{{league.name}}</button>\n</ion-content>\n'/*ion-inline-end:"/Users/roym/My_Passion_Project/Passion_Project/ionic-fb/src/pages/tournaments/tournaments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_league_service_league_service__["a" /* LeagueServiceProvider */]])
    ], TournamentsPage);
    return TournamentsPage;
}());

//# sourceMappingURL=tournaments.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.getUsers = function () {
        return this.http.get('http:localhost:8080/user');
    };
    ApiProvider.prototype.saveUser = function (createAccountInfo) {
        return this.http.post("http://localhost:8080/user/add?username=" + createAccountInfo.name + "&email=" + createAccountInfo.email + "&password=" + createAccountInfo.password, {});
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ApiProvider);
    return ApiProvider;
    var _a;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map