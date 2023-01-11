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
exports.PutOrderTriggerDatesResponseType = exports.PutOrderTriggerDatesResponseTypeSubscriptions = exports.PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = exports.PutOrderTriggerDatesResponseTypeStatusEnum = exports.PutOrderTriggerDatesResponseTypeReasons = void 0;
var utils_1 = require("../../../internal/utils");
var PutOrderTriggerDatesResponseTypeReasons = /** @class */ (function (_super) {
    __extends(PutOrderTriggerDatesResponseTypeReasons, _super);
    function PutOrderTriggerDatesResponseTypeReasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseTypeReasons.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseTypeReasons.prototype, "message", void 0);
    return PutOrderTriggerDatesResponseTypeReasons;
}(utils_1.SpeakeasyBase));
exports.PutOrderTriggerDatesResponseTypeReasons = PutOrderTriggerDatesResponseTypeReasons;
var PutOrderTriggerDatesResponseTypeStatusEnum;
(function (PutOrderTriggerDatesResponseTypeStatusEnum) {
    PutOrderTriggerDatesResponseTypeStatusEnum["Completed"] = "Completed";
    PutOrderTriggerDatesResponseTypeStatusEnum["Pending"] = "Pending";
})(PutOrderTriggerDatesResponseTypeStatusEnum = exports.PutOrderTriggerDatesResponseTypeStatusEnum || (exports.PutOrderTriggerDatesResponseTypeStatusEnum = {}));
var PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum;
(function (PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum) {
    PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum["Active"] = "Active";
    PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum["PendingActivation"] = "Pending Activation";
    PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum["PendingAcceptance"] = "Pending Acceptance";
})(PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = exports.PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum || (exports.PutOrderTriggerDatesResponseTypeSubscriptionsStatusEnum = {}));
var PutOrderTriggerDatesResponseTypeSubscriptions = /** @class */ (function (_super) {
    __extends(PutOrderTriggerDatesResponseTypeSubscriptions, _super);
    function PutOrderTriggerDatesResponseTypeSubscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseTypeSubscriptions.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseTypeSubscriptions.prototype, "subscriptionNumber", void 0);
    return PutOrderTriggerDatesResponseTypeSubscriptions;
}(utils_1.SpeakeasyBase));
exports.PutOrderTriggerDatesResponseTypeSubscriptions = PutOrderTriggerDatesResponseTypeSubscriptions;
var PutOrderTriggerDatesResponseType = /** @class */ (function (_super) {
    __extends(PutOrderTriggerDatesResponseType, _super);
    function PutOrderTriggerDatesResponseType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseType.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderNumber" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseType.prototype, "orderNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processId" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseType.prototype, "processId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reasons", elemType: PutOrderTriggerDatesResponseTypeReasons }),
        __metadata("design:type", Array)
    ], PutOrderTriggerDatesResponseType.prototype, "reasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutOrderTriggerDatesResponseType.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions", elemType: PutOrderTriggerDatesResponseTypeSubscriptions }),
        __metadata("design:type", Array)
    ], PutOrderTriggerDatesResponseType.prototype, "subscriptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], PutOrderTriggerDatesResponseType.prototype, "success", void 0);
    return PutOrderTriggerDatesResponseType;
}(utils_1.SpeakeasyBase));
exports.PutOrderTriggerDatesResponseType = PutOrderTriggerDatesResponseType;
