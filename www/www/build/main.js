webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationEventPage = /** @class */ (function () {
    function NotificationEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = {};
    }
    NotificationEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationEventPage');
        // Pull the event we received from the home page    
        this.event = this.navParams.get("event");
    };
    NotificationEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification-event',template:/*ion-inline-start:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/notification-event/notification-event.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Azure Notification Hubs (Ionic 3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Notification Event\n    </ion-list-header>\n    <ion-item text-wrap>\n      <h2>Title</h2>\n      <p>{{event.title}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Message</h2>\n      <p>{{event.message}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Count</h2>\n      <p>{{event.count}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Sound</h2>\n      <p>{{event.sound}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Image</h2>\n      <p>{{event.image}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Additional Data</h2>\n      <p>{{event.additionalData}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Received</h2>\n      <p>{{event.received}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/notification-event/notification-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NotificationEventPage);
    return NotificationEventPage;
}());

//# sourceMappingURL=notification-event.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationEventPage = /** @class */ (function () {
    function RegistrationEventPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // event: Registration;
        this.event = {};
    }
    RegistrationEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationEventPage');
        // Pull the event we received from the home page    
        this.event = this.navParams.get("event");
    };
    RegistrationEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration-event',template:/*ion-inline-start:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/registration-event/registration-event.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Azure Notification Hubs (Ionic 3)</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      Registration Event\n    </ion-list-header>\n    <ion-item text-wrap>\n      <h2>Registration ID</h2>\n      <p>{{event.registrationId}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Azure Registration ID</h2>\n      <p>{{event.azureRegId}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Received</h2>\n      <p>{{event.received}}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/registration-event/registration-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegistrationEventPage);
    return RegistrationEventPage;
}());

//# sourceMappingURL=registration-event.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/notification-event/notification-event.module": [
		275,
		1
	],
	"../pages/registration-event/registration-event.module": [
		276,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_event_registration_event__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_event_notification_event__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_events__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_azure_notification_hubs_azure_notification_hubs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Event pages


// Interfaces and Providers


var HomePage = /** @class */ (function () {
    function HomePage(events, pushService, nav) {
        var _this = this;
        this.events = events;
        this.pushService = pushService;
        this.nav = nav;
        this.eventList = [];
        console.log('HomePage constructor');
        // The provider (AzureNotificationHubs) fires an event whenever it
        // gets new data
        this.events.subscribe("anh: data-change", function () {
            // Update our local copy of the event data when it changes in the provider
            console.log("HomePage: event data change detected");
            _this.eventList = _this.pushService.pushEvents;
        });
    }
    HomePage.prototype.viewEvent = function (theEvent) {
        console.log('HomePage: event tapped');
        // What type of event do we have?
        if (theEvent.type == __WEBPACK_IMPORTED_MODULE_4__interfaces_events__["a" /* EventType */].registration) {
            console.log('HomePage: Opening Registration Event');
            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__registration_event_registration_event__["a" /* RegistrationEventPage */], { event: theEvent });
        }
        else {
            console.log('HomePage: Opening Notification Event');
            this.nav.push(__WEBPACK_IMPORTED_MODULE_3__notification_event_notification_event__["a" /* NotificationEventPage */], { event: theEvent });
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> Azure Notification Hubs (Ionic 3) </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>\n      {{ eventList.length ? \'Push Events\': \'Waiting for registration\' }}\n    </ion-list-header>\n    <ion-item (click)="viewEvent(event)" *ngFor="let event of eventList">\n      <h2>{{ event.title }}</h2>\n      <p>{{ event.received }}</p>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_azure_notification_hubs_azure_notification_hubs__["a" /* AzureNotificationHubsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
// Interface: Events
var EventType;
(function (EventType) {
    EventType[EventType["registration"] = 0] = "registration";
    EventType[EventType["notification"] = 1] = "notification";
})(EventType || (EventType = {}));
//# sourceMappingURL=events.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzureNotificationHubsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_events__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// use lodash to clone data objects coming from the push service

// Interface(s)

// Azure Notification Hubs configuration (in an external file)

var AzureNotificationHubsProvider = /** @class */ (function () {
    function AzureNotificationHubsProvider(alertCtrl, events, platform) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.platform = platform;
        // make an empty array of registrations and notifications
        this.pushEvents = [];
        // Wait until the container's initialized before doing anything here
        this.platform.ready().then(function () {
            console.log('AzureNotificationHubsProvider: Platform ready');
            // make sure the config values are set in the config.ts file.
            if (__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].hubName && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].hubConnectionString) {
                // Initialize the Push Service
                var push = PushNotification.init({
                    // Pass in our configuration values
                    notificationHubPath: __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].hubName,
                    connectionString: __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].hubConnectionString,
                    android: { sound: true },
                    ios: {
                        alert: 'true', badge: true, sound: 'false'
                    }
                });
                push.on('registration', function (data) {
                    console.log('Received Registration event');
                    // Copy the event data into a Registration object
                    var registration = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](data);
                    // Populate the object type
                    registration.type = __WEBPACK_IMPORTED_MODULE_3__interfaces_events__["a" /* EventType */].registration;
                    // Set the title (registrations won't have one)
                    registration.title = 'Registration';
                    // Set the created date
                    registration.received = new Date(Date.now());
                    // Add the event to the events array        
                    _this.saveData(registration);
                    _this.events.publish("anh: data-change");
                    // Tell the user
                    var alert = _this.alertCtrl.create({
                        title: registration.title,
                        message: "Registration completed successfully",
                        buttons: ['OK']
                    });
                    alert.present();
                });
                push.on('notification', function (data) {
                    console.log('Received Notification event');
                    // Copy the event data into a Notification object
                    var notification = __WEBPACK_IMPORTED_MODULE_2_lodash__["clone"](data);
                    // Populate the object type
                    notification.type = __WEBPACK_IMPORTED_MODULE_3__interfaces_events__["a" /* EventType */].notification;
                    // Set the created date
                    notification.received = new Date(Date.now());
                    // Add the event to the events array 
                    _this.saveData(notification);
                    _this.events.publish("anh: data-change");
                    // Tell the user
                    var alert = _this.alertCtrl.create({
                        title: notification.title,
                        message: notification.message,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            else {
                // Tell the user this won't work until they `fix` the config.
                var alert_1 = _this.alertCtrl.create({
                    title: 'Invalid Configuration',
                    message: "Please populate the project's <strong>src/app/config.ts</strong> file with settings from your Azure Notification Hubs configuration.",
                    buttons: ["OK, I'm sorry!"]
                });
                alert_1.present();
            }
        });
    }
    AzureNotificationHubsProvider.prototype.saveData = function (data) {
        console.log('Saving data to the pushEvents array');
        this.pushEvents.push(data);
        console.dir(this.pushEvents);
    };
    AzureNotificationHubsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */]])
    ], AzureNotificationHubsProvider);
    return AzureNotificationHubsProvider;
}());

//# sourceMappingURL=azure-notification-hubs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_event_notification_event__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registration_event_registration_event__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_azure_notification_hubs_azure_notification_hubs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Pages 



// Providers 

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_event_notification_event__["a" /* NotificationEventPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registration_event_registration_event__["a" /* RegistrationEventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/notification-event/notification-event.module#NotificationEventPageModule', name: 'NotificationEventPage', segment: 'notification-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration-event/registration-event.module#RegistrationEventPageModule', name: 'RegistrationEventPage', segment: 'registration-event', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_notification_event_notification_event__["a" /* NotificationEventPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registration_event_registration_event__["a" /* RegistrationEventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_azure_notification_hubs_azure_notification_hubs__["a" /* AzureNotificationHubsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/johnwargo/dev/azure-notification-hubs/ionic-3-push-sample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    hubName: 'JMW-Test',
    hubConnectionString: 'Endpoint=sb://jmwns01.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=dxJb7C8dScCXoAvlHvUo5yfnHYCEs4DNipwkWjw+m0I='
};
//# sourceMappingURL=config.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map