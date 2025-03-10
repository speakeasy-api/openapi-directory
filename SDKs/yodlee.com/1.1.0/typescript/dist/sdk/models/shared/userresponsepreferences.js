"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponsePreferences = exports.UserResponsePreferencesLocaleEnum = exports.UserResponsePreferencesCurrencyEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UserResponsePreferencesCurrencyEnum;
(function (UserResponsePreferencesCurrencyEnum) {
    UserResponsePreferencesCurrencyEnum["Aud"] = "AUD";
    UserResponsePreferencesCurrencyEnum["Brl"] = "BRL";
    UserResponsePreferencesCurrencyEnum["Cad"] = "CAD";
    UserResponsePreferencesCurrencyEnum["Eur"] = "EUR";
    UserResponsePreferencesCurrencyEnum["Gbp"] = "GBP";
    UserResponsePreferencesCurrencyEnum["Hkd"] = "HKD";
    UserResponsePreferencesCurrencyEnum["Idr"] = "IDR";
    UserResponsePreferencesCurrencyEnum["Inr"] = "INR";
    UserResponsePreferencesCurrencyEnum["Jpy"] = "JPY";
    UserResponsePreferencesCurrencyEnum["Nzd"] = "NZD";
    UserResponsePreferencesCurrencyEnum["Sgd"] = "SGD";
    UserResponsePreferencesCurrencyEnum["Usd"] = "USD";
    UserResponsePreferencesCurrencyEnum["Zar"] = "ZAR";
    UserResponsePreferencesCurrencyEnum["Cny"] = "CNY";
    UserResponsePreferencesCurrencyEnum["Vnd"] = "VND";
    UserResponsePreferencesCurrencyEnum["Myr"] = "MYR";
    UserResponsePreferencesCurrencyEnum["Chf"] = "CHF";
})(UserResponsePreferencesCurrencyEnum = exports.UserResponsePreferencesCurrencyEnum || (exports.UserResponsePreferencesCurrencyEnum = {}));
var UserResponsePreferencesLocaleEnum;
(function (UserResponsePreferencesLocaleEnum) {
    UserResponsePreferencesLocaleEnum["EnUs"] = "en_US";
    UserResponsePreferencesLocaleEnum["EnEs"] = "en_ES";
    UserResponsePreferencesLocaleEnum["FrCa"] = "fr_CA";
    UserResponsePreferencesLocaleEnum["ZhCn"] = "zh_CN";
})(UserResponsePreferencesLocaleEnum = exports.UserResponsePreferencesLocaleEnum || (exports.UserResponsePreferencesLocaleEnum = {}));
var UserResponsePreferences = /** @class */ (function (_super) {
    __extends(UserResponsePreferences, _super);
    function UserResponsePreferences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], UserResponsePreferences.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateFormat" }),
        __metadata("design:type", String)
    ], UserResponsePreferences.prototype, "dateFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], UserResponsePreferences.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], UserResponsePreferences.prototype, "timeZone", void 0);
    return UserResponsePreferences;
}(utils_1.SpeakeasyBase));
exports.UserResponsePreferences = UserResponsePreferences;
