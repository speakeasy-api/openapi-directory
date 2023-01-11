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
exports.OrderActionForEvergreen = exports.OrderActionForEvergreenTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rateplanoverrideforevergreen_1 = require("./rateplanoverrideforevergreen");
var cancelsubscription_1 = require("./cancelsubscription");
var createsubscriptionforevergreen_1 = require("./createsubscriptionforevergreen");
var ordermetricsforevergreen_1 = require("./ordermetricsforevergreen");
var ownertransfer_1 = require("./ownertransfer");
var removeproduct_1 = require("./removeproduct");
var getorderresume_1 = require("./getorderresume");
var getordersuspend_1 = require("./getordersuspend");
var termsandconditions_1 = require("./termsandconditions");
var triggerdate_1 = require("./triggerdate");
var rateplanupdateforevergreen_1 = require("./rateplanupdateforevergreen");
var OrderActionForEvergreenTypeEnum;
(function (OrderActionForEvergreenTypeEnum) {
    OrderActionForEvergreenTypeEnum["CreateSubscription"] = "CreateSubscription";
    OrderActionForEvergreenTypeEnum["TermsAndConditions"] = "TermsAndConditions";
    OrderActionForEvergreenTypeEnum["AddProduct"] = "AddProduct";
    OrderActionForEvergreenTypeEnum["UpdateProduct"] = "UpdateProduct";
    OrderActionForEvergreenTypeEnum["RemoveProduct"] = "RemoveProduct";
    OrderActionForEvergreenTypeEnum["RenewSubscription"] = "RenewSubscription";
    OrderActionForEvergreenTypeEnum["CancelSubscription"] = "CancelSubscription";
    OrderActionForEvergreenTypeEnum["OwnerTransfer"] = "OwnerTransfer";
    OrderActionForEvergreenTypeEnum["Suspend"] = "Suspend";
    OrderActionForEvergreenTypeEnum["Resume"] = "Resume";
})(OrderActionForEvergreenTypeEnum = exports.OrderActionForEvergreenTypeEnum || (exports.OrderActionForEvergreenTypeEnum = {}));
// OrderActionForEvergreen
/**
 * Represents the processed order action.
**/
var OrderActionForEvergreen = /** @class */ (function (_super) {
    __extends(OrderActionForEvergreen, _super);
    function OrderActionForEvergreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProduct" }),
        __metadata("design:type", rateplanoverrideforevergreen_1.RatePlanOverrideForEvergreen)
    ], OrderActionForEvergreen.prototype, "addProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelSubscription" }),
        __metadata("design:type", cancelsubscription_1.CancelSubscription)
    ], OrderActionForEvergreen.prototype, "cancelSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createSubscription" }),
        __metadata("design:type", createsubscriptionforevergreen_1.CreateSubscriptionForEvergreen)
    ], OrderActionForEvergreen.prototype, "createSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderActionForEvergreen.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderActionForEvergreen.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderMetrics", elemType: ordermetricsforevergreen_1.OrderMetricsForEvergreen }),
        __metadata("design:type", Array)
    ], OrderActionForEvergreen.prototype, "orderMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerTransfer" }),
        __metadata("design:type", ownertransfer_1.OwnerTransfer)
    ], OrderActionForEvergreen.prototype, "ownerTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeProduct" }),
        __metadata("design:type", removeproduct_1.RemoveProduct)
    ], OrderActionForEvergreen.prototype, "removeProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resume" }),
        __metadata("design:type", getorderresume_1.GetOrderResume)
    ], OrderActionForEvergreen.prototype, "resume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], OrderActionForEvergreen.prototype, "sequence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspend" }),
        __metadata("design:type", getordersuspend_1.GetOrderSuspend)
    ], OrderActionForEvergreen.prototype, "suspend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", termsandconditions_1.TermsAndConditions)
    ], OrderActionForEvergreen.prototype, "termsAndConditions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDates", elemType: triggerdate_1.TriggerDate }),
        __metadata("design:type", Array)
    ], OrderActionForEvergreen.prototype, "triggerDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderActionForEvergreen.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateProduct" }),
        __metadata("design:type", rateplanupdateforevergreen_1.RatePlanUpdateForEvergreen)
    ], OrderActionForEvergreen.prototype, "updateProduct", void 0);
    return OrderActionForEvergreen;
}(utils_1.SpeakeasyBase));
exports.OrderActionForEvergreen = OrderActionForEvergreen;
