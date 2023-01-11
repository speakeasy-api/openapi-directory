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
exports.PreviewOrderOrderAction = exports.PreviewOrderOrderActionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var previeworderrateplanoverride_1 = require("./previeworderrateplanoverride");
var cancelsubscription_1 = require("./cancelsubscription");
var previewordercreatesubscription_1 = require("./previewordercreatesubscription");
var ownertransfer_1 = require("./ownertransfer");
var removeproduct_1 = require("./removeproduct");
var createorderresume_1 = require("./createorderresume");
var createordersuspend_1 = require("./createordersuspend");
var createordertermsandconditions_1 = require("./createordertermsandconditions");
var triggerdate_1 = require("./triggerdate");
var previeworderrateplanupdate_1 = require("./previeworderrateplanupdate");
var PreviewOrderOrderActionTypeEnum;
(function (PreviewOrderOrderActionTypeEnum) {
    PreviewOrderOrderActionTypeEnum["CreateSubscription"] = "CreateSubscription";
    PreviewOrderOrderActionTypeEnum["TermsAndConditions"] = "TermsAndConditions";
    PreviewOrderOrderActionTypeEnum["AddProduct"] = "AddProduct";
    PreviewOrderOrderActionTypeEnum["UpdateProduct"] = "UpdateProduct";
    PreviewOrderOrderActionTypeEnum["RemoveProduct"] = "RemoveProduct";
    PreviewOrderOrderActionTypeEnum["RenewSubscription"] = "RenewSubscription";
    PreviewOrderOrderActionTypeEnum["CancelSubscription"] = "CancelSubscription";
    PreviewOrderOrderActionTypeEnum["OwnerTransfer"] = "OwnerTransfer";
    PreviewOrderOrderActionTypeEnum["Suspend"] = "Suspend";
    PreviewOrderOrderActionTypeEnum["Resume"] = "Resume";
})(PreviewOrderOrderActionTypeEnum = exports.PreviewOrderOrderActionTypeEnum || (exports.PreviewOrderOrderActionTypeEnum = {}));
var PreviewOrderOrderAction = /** @class */ (function (_super) {
    __extends(PreviewOrderOrderAction, _super);
    function PreviewOrderOrderAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProduct" }),
        __metadata("design:type", previeworderrateplanoverride_1.PreviewOrderRatePlanOverride)
    ], PreviewOrderOrderAction.prototype, "addProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelSubscription" }),
        __metadata("design:type", cancelsubscription_1.CancelSubscription)
    ], PreviewOrderOrderAction.prototype, "cancelSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createSubscription" }),
        __metadata("design:type", previewordercreatesubscription_1.PreviewOrderCreateSubscription)
    ], PreviewOrderOrderAction.prototype, "createSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PreviewOrderOrderAction.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerTransfer" }),
        __metadata("design:type", ownertransfer_1.OwnerTransfer)
    ], PreviewOrderOrderAction.prototype, "ownerTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeProduct" }),
        __metadata("design:type", removeproduct_1.RemoveProduct)
    ], PreviewOrderOrderAction.prototype, "removeProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resume" }),
        __metadata("design:type", createorderresume_1.CreateOrderResume)
    ], PreviewOrderOrderAction.prototype, "resume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspend" }),
        __metadata("design:type", createordersuspend_1.CreateOrderSuspend)
    ], PreviewOrderOrderAction.prototype, "suspend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", createordertermsandconditions_1.CreateOrderTermsAndConditions)
    ], PreviewOrderOrderAction.prototype, "termsAndConditions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDates", elemType: triggerdate_1.TriggerDate }),
        __metadata("design:type", Array)
    ], PreviewOrderOrderAction.prototype, "triggerDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PreviewOrderOrderAction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateProduct" }),
        __metadata("design:type", previeworderrateplanupdate_1.PreviewOrderRatePlanUpdate)
    ], PreviewOrderOrderAction.prototype, "updateProduct", void 0);
    return PreviewOrderOrderAction;
}(utils_1.SpeakeasyBase));
exports.PreviewOrderOrderAction = PreviewOrderOrderAction;
