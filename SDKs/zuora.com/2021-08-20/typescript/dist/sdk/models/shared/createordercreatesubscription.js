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
exports.CreateOrderCreateSubscription = exports.CreateOrderCreateSubscriptionTerms = exports.CreateOrderCreateSubscriptionTermsRenewalSettingEnum = exports.CreateOrderCreateSubscriptionTermsInitialTerm = exports.CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = exports.CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var renewalterm_1 = require("./renewalterm");
var createorderrateplanoverride_1 = require("./createorderrateplanoverride");
var CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum;
(function (CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum) {
    CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Month"] = "Month";
    CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Year"] = "Year";
    CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Day"] = "Day";
    CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum["Week"] = "Week";
})(CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = exports.CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum || (exports.CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum = {}));
var CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum;
(function (CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum) {
    CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum["Termed"] = "TERMED";
    CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum["Evergreen"] = "EVERGREEN";
})(CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = exports.CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum || (exports.CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum = {}));
// CreateOrderCreateSubscriptionTermsInitialTerm
/**
 * Information about the first term of the subscription.
 *
**/
var CreateOrderCreateSubscriptionTermsInitialTerm = /** @class */ (function (_super) {
    __extends(CreateOrderCreateSubscriptionTermsInitialTerm, _super);
    function CreateOrderCreateSubscriptionTermsInitialTerm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], CreateOrderCreateSubscriptionTermsInitialTerm.prototype, "period", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodType" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscriptionTermsInitialTerm.prototype, "periodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], CreateOrderCreateSubscriptionTermsInitialTerm.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termType" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscriptionTermsInitialTerm.prototype, "termType", void 0);
    return CreateOrderCreateSubscriptionTermsInitialTerm;
}(utils_1.SpeakeasyBase));
exports.CreateOrderCreateSubscriptionTermsInitialTerm = CreateOrderCreateSubscriptionTermsInitialTerm;
var CreateOrderCreateSubscriptionTermsRenewalSettingEnum;
(function (CreateOrderCreateSubscriptionTermsRenewalSettingEnum) {
    CreateOrderCreateSubscriptionTermsRenewalSettingEnum["RenewWithSpecificTerm"] = "RENEW_WITH_SPECIFIC_TERM";
    CreateOrderCreateSubscriptionTermsRenewalSettingEnum["RenewToEvergreen"] = "RENEW_TO_EVERGREEN";
})(CreateOrderCreateSubscriptionTermsRenewalSettingEnum = exports.CreateOrderCreateSubscriptionTermsRenewalSettingEnum || (exports.CreateOrderCreateSubscriptionTermsRenewalSettingEnum = {}));
// CreateOrderCreateSubscriptionTerms
/**
 * Container for the terms and renewal settings of the subscription.
 *
**/
var CreateOrderCreateSubscriptionTerms = /** @class */ (function (_super) {
    __extends(CreateOrderCreateSubscriptionTerms, _super);
    function CreateOrderCreateSubscriptionTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRenew" }),
        __metadata("design:type", Boolean)
    ], CreateOrderCreateSubscriptionTerms.prototype, "autoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initialTerm" }),
        __metadata("design:type", CreateOrderCreateSubscriptionTermsInitialTerm)
    ], CreateOrderCreateSubscriptionTerms.prototype, "initialTerm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalSetting" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscriptionTerms.prototype, "renewalSetting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=renewalTerms", elemType: renewalterm_1.RenewalTerm }),
        __metadata("design:type", Array)
    ], CreateOrderCreateSubscriptionTerms.prototype, "renewalTerms", void 0);
    return CreateOrderCreateSubscriptionTerms;
}(utils_1.SpeakeasyBase));
exports.CreateOrderCreateSubscriptionTerms = CreateOrderCreateSubscriptionTerms;
// CreateOrderCreateSubscription
/**
 * Information about an order action of type `CreateSubscription`.
 *
**/
var CreateOrderCreateSubscription = /** @class */ (function (_super) {
    __extends(CreateOrderCreateSubscription, _super);
    function CreateOrderCreateSubscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceSeparately" }),
        __metadata("design:type", Boolean)
    ], CreateOrderCreateSubscription.prototype, "invoiceSeparately", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newSubscriptionOwnerAccount" }),
        __metadata("design:type", Object)
    ], CreateOrderCreateSubscription.prototype, "newSubscriptionOwnerAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscription.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscribeToRatePlans", elemType: createorderrateplanoverride_1.CreateOrderRatePlanOverride }),
        __metadata("design:type", Array)
    ], CreateOrderCreateSubscription.prototype, "subscribeToRatePlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscription.prototype, "subscriptionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionOwnerAccountNumber" }),
        __metadata("design:type", String)
    ], CreateOrderCreateSubscription.prototype, "subscriptionOwnerAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terms" }),
        __metadata("design:type", CreateOrderCreateSubscriptionTerms)
    ], CreateOrderCreateSubscription.prototype, "terms", void 0);
    return CreateOrderCreateSubscription;
}(utils_1.SpeakeasyBase));
exports.CreateOrderCreateSubscription = CreateOrderCreateSubscription;
