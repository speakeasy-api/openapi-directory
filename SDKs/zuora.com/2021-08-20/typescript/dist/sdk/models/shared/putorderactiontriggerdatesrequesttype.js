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
exports.PutOrderActionTriggerDatesRequestType = exports.PutOrderActionTriggerDatesRequestTypeSubscriptions = exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions = exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates = exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum = exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges = void 0;
var utils_1 = require("../../../internal/utils");
var PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges = /** @class */ (function (_super) {
    __extends(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges, _super);
    function PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specificTriggerDate" }),
        __metadata("design:type", Date)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges.prototype, "specificTriggerDate", void 0);
    return PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges;
}(utils_1.SpeakeasyBase));
exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges = PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges;
var PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum;
(function (PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum) {
    PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum["ServiceActivation"] = "ServiceActivation";
    PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum["CustomerAcceptance"] = "CustomerAcceptance";
})(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum = exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum || (exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDatesNameEnum = {}));
var PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates = /** @class */ (function (_super) {
    __extends(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates, _super);
    function PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDate" }),
        __metadata("design:type", Date)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates.prototype, "triggerDate", void 0);
    return PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates;
}(utils_1.SpeakeasyBase));
exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates = PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates;
var PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions = /** @class */ (function (_super) {
    __extends(PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions, _super);
    function PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charges", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsCharges }),
        __metadata("design:type", Array)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions.prototype, "charges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions.prototype, "sequence", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerDates", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActionsTriggerDates }),
        __metadata("design:type", Array)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions.prototype, "triggerDates", void 0);
    return PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions;
}(utils_1.SpeakeasyBase));
exports.PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions = PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions;
var PutOrderActionTriggerDatesRequestTypeSubscriptions = /** @class */ (function (_super) {
    __extends(PutOrderActionTriggerDatesRequestTypeSubscriptions, _super);
    function PutOrderActionTriggerDatesRequestTypeSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderActions", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptionsOrderActions }),
        __metadata("design:type", Array)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptions.prototype, "orderActions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PutOrderActionTriggerDatesRequestTypeSubscriptions.prototype, "subscriptionNumber", void 0);
    return PutOrderActionTriggerDatesRequestTypeSubscriptions;
}(utils_1.SpeakeasyBase));
exports.PutOrderActionTriggerDatesRequestTypeSubscriptions = PutOrderActionTriggerDatesRequestTypeSubscriptions;
var PutOrderActionTriggerDatesRequestType = /** @class */ (function (_super) {
    __extends(PutOrderActionTriggerDatesRequestType, _super);
    function PutOrderActionTriggerDatesRequestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: PutOrderActionTriggerDatesRequestTypeSubscriptions }),
        __metadata("design:type", Array)
    ], PutOrderActionTriggerDatesRequestType.prototype, "subscriptions", void 0);
    return PutOrderActionTriggerDatesRequestType;
}(utils_1.SpeakeasyBase));
exports.PutOrderActionTriggerDatesRequestType = PutOrderActionTriggerDatesRequestType;
