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
exports.OrderAction = exports.OrderActionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var rateplanoverride_1 = require("./rateplanoverride");
var cancelsubscription_1 = require("./cancelsubscription");
var createsubscription_1 = require("./createsubscription");
var orderitem_1 = require("./orderitem");
var ordermetric_1 = require("./ordermetric");
var ownertransfer_1 = require("./ownertransfer");
var removeproduct_1 = require("./removeproduct");
var getorderresume_1 = require("./getorderresume");
var getordersuspend_1 = require("./getordersuspend");
var termsandconditions_1 = require("./termsandconditions");
var triggerdate_1 = require("./triggerdate");
var rateplanupdate_1 = require("./rateplanupdate");
var OrderActionTypeEnum;
(function (OrderActionTypeEnum) {
    OrderActionTypeEnum["CreateSubscription"] = "CreateSubscription";
    OrderActionTypeEnum["TermsAndConditions"] = "TermsAndConditions";
    OrderActionTypeEnum["AddProduct"] = "AddProduct";
    OrderActionTypeEnum["UpdateProduct"] = "UpdateProduct";
    OrderActionTypeEnum["RemoveProduct"] = "RemoveProduct";
    OrderActionTypeEnum["RenewSubscription"] = "RenewSubscription";
    OrderActionTypeEnum["CancelSubscription"] = "CancelSubscription";
    OrderActionTypeEnum["OwnerTransfer"] = "OwnerTransfer";
    OrderActionTypeEnum["Suspend"] = "Suspend";
    OrderActionTypeEnum["Resume"] = "Resume";
})(OrderActionTypeEnum = exports.OrderActionTypeEnum || (exports.OrderActionTypeEnum = {}));
// OrderAction
/**
 * Represents the processed order action.
**/
var OrderAction = /** @class */ (function (_super) {
    __extends(OrderAction, _super);
    function OrderAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProduct" }),
        __metadata("design:type", rateplanoverride_1.RatePlanOverride)
    ], OrderAction.prototype, "addProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelSubscription" }),
        __metadata("design:type", cancelsubscription_1.CancelSubscription)
    ], OrderAction.prototype, "cancelSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createSubscription" }),
        __metadata("design:type", createsubscription_1.CreateSubscription)
    ], OrderAction.prototype, "createSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], OrderAction.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderAction.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItems", elemType: orderitem_1.OrderItem }),
        __metadata("design:type", Array)
    ], OrderAction.prototype, "orderItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderMetrics", elemType: ordermetric_1.OrderMetric }),
        __metadata("design:type", Array)
    ], OrderAction.prototype, "orderMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerTransfer" }),
        __metadata("design:type", ownertransfer_1.OwnerTransfer)
    ], OrderAction.prototype, "ownerTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeProduct" }),
        __metadata("design:type", removeproduct_1.RemoveProduct)
    ], OrderAction.prototype, "removeProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resume" }),
        __metadata("design:type", getorderresume_1.GetOrderResume)
    ], OrderAction.prototype, "resume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], OrderAction.prototype, "sequence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspend" }),
        __metadata("design:type", getordersuspend_1.GetOrderSuspend)
    ], OrderAction.prototype, "suspend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", termsandconditions_1.TermsAndConditions)
    ], OrderAction.prototype, "termsAndConditions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDates", elemType: triggerdate_1.TriggerDate }),
        __metadata("design:type", Array)
    ], OrderAction.prototype, "triggerDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrderAction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateProduct" }),
        __metadata("design:type", rateplanupdate_1.RatePlanUpdate)
    ], OrderAction.prototype, "updateProduct", void 0);
    return OrderAction;
}(utils_1.SpeakeasyBase));
exports.OrderAction = OrderAction;
