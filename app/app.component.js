"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(horizon) {
        this.horizon = horizon;
    }
    AppComponent.prototype.ngOnInit = function () {
        var messages = this.horizon("messages");
        messages.store({
            sender: "Bob",
            time: new Date(),
            text: "Hello, World!"
        });
        /*messages.findAll({sender: "Bob"}).fetch()
                  .subscribe(m => console.log(m));
        */
        messages.limit(5).watch()
            .subscribe(function (items) { return console.log(items); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>My Angular</h1>'
        }),
        __param(0, core_1.Inject("horizon")), 
        __metadata('design:paramtypes', [Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map