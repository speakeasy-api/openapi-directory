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
exports.CreateOrderOrderAction = exports.CreateOrderOrderActionTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var createorderrateplanoverride_1 = require("./createorderrateplanoverride");
var cancelsubscription_1 = require("./cancelsubscription");
var createordercreatesubscription_1 = require("./createordercreatesubscription");
var ownertransfer_1 = require("./ownertransfer");
var removeproduct_1 = require("./removeproduct");
var createorderresume_1 = require("./createorderresume");
var createordersuspend_1 = require("./createordersuspend");
var createordertermsandconditions_1 = require("./createordertermsandconditions");
var triggerdate_1 = require("./triggerdate");
var createorderrateplanupdate_1 = require("./createorderrateplanupdate");
var CreateOrderOrderActionTypeEnum;
(function (CreateOrderOrderActionTypeEnum) {
    CreateOrderOrderActionTypeEnum["CreateSubscription"] = "CreateSubscription";
    CreateOrderOrderActionTypeEnum["TermsAndConditions"] = "TermsAndConditions";
    CreateOrderOrderActionTypeEnum["AddProduct"] = "AddProduct";
    CreateOrderOrderActionTypeEnum["UpdateProduct"] = "UpdateProduct";
    CreateOrderOrderActionTypeEnum["RemoveProduct"] = "RemoveProduct";
    CreateOrderOrderActionTypeEnum["RenewSubscription"] = "RenewSubscription";
    CreateOrderOrderActionTypeEnum["CancelSubscription"] = "CancelSubscription";
    CreateOrderOrderActionTypeEnum["OwnerTransfer"] = "OwnerTransfer";
    CreateOrderOrderActionTypeEnum["Suspend"] = "Suspend";
    CreateOrderOrderActionTypeEnum["Resume"] = "Resume";
})(CreateOrderOrderActionTypeEnum = exports.CreateOrderOrderActionTypeEnum || (exports.CreateOrderOrderActionTypeEnum = {}));
var CreateOrderOrderAction = /** @class */ (function (_super) {
    __extends(CreateOrderOrderAction, _super);
    function CreateOrderOrderAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addProduct" }),
        __metadata("design:type", createorderrateplanoverride_1.CreateOrderRatePlanOverride)
    ], CreateOrderOrderAction.prototype, "addProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelSubscription" }),
        __metadata("design:type", cancelsubscription_1.CancelSubscription)
    ], CreateOrderOrderAction.prototype, "cancelSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createSubscription" }),
        __metadata("design:type", createordercreatesubscription_1.CreateOrderCreateSubscription)
    ], CreateOrderOrderAction.prototype, "createSubscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], CreateOrderOrderAction.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerTransfer" }),
        __metadata("design:type", ownertransfer_1.OwnerTransfer)
    ], CreateOrderOrderAction.prototype, "ownerTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeProduct" }),
        __metadata("design:type", removeproduct_1.RemoveProduct)
    ], CreateOrderOrderAction.prototype, "removeProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resume" }),
        __metadata("design:type", createorderresume_1.CreateOrderResume)
    ], CreateOrderOrderAction.prototype, "resume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspend" }),
        __metadata("design:type", createordersuspend_1.CreateOrderSuspend)
    ], CreateOrderOrderAction.prototype, "suspend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", createordertermsandconditions_1.CreateOrderTermsAndConditions)
    ], CreateOrderOrderAction.prototype, "termsAndConditions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDates", elemType: triggerdate_1.TriggerDate }),
        __metadata("design:type", Array)
    ], CreateOrderOrderAction.prototype, "triggerDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateOrderOrderAction.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateProduct" }),
        __metadata("design:type", createorderrateplanupdate_1.CreateOrderRatePlanUpdate)
    ], CreateOrderOrderAction.prototype, "updateProduct", void 0);
    return CreateOrderOrderAction;
}(utils_1.SpeakeasyBase));
exports.CreateOrderOrderAction = CreateOrderOrderAction;
