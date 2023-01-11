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
exports.PutSubscriptionPatchRequestType = exports.PutSubscriptionPatchRequestTypeRatePlans = exports.PutSubscriptionPatchRequestTypeRatePlansCharges = void 0;
var utils_1 = require("../../../internal/utils");
var PutSubscriptionPatchRequestTypeRatePlansCharges = /** @class */ (function (_super) {
    __extends(PutSubscriptionPatchRequestTypeRatePlansCharges, _super);
    function PutSubscriptionPatchRequestTypeRatePlansCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeId" }),
        __metadata("design:type", String)
    ], PutSubscriptionPatchRequestTypeRatePlansCharges.prototype, "chargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], PutSubscriptionPatchRequestTypeRatePlansCharges.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PutSubscriptionPatchRequestTypeRatePlansCharges.prototype, "customFields", void 0);
    return PutSubscriptionPatchRequestTypeRatePlansCharges;
}(utils_1.SpeakeasyBase));
exports.PutSubscriptionPatchRequestTypeRatePlansCharges = PutSubscriptionPatchRequestTypeRatePlansCharges;
var PutSubscriptionPatchRequestTypeRatePlans = /** @class */ (function (_super) {
    __extends(PutSubscriptionPatchRequestTypeRatePlans, _super);
    function PutSubscriptionPatchRequestTypeRatePlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charges", elemType: PutSubscriptionPatchRequestTypeRatePlansCharges }),
        __metadata("design:type", Array)
    ], PutSubscriptionPatchRequestTypeRatePlans.prototype, "charges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PutSubscriptionPatchRequestTypeRatePlans.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratePlanId" }),
        __metadata("design:type", String)
    ], PutSubscriptionPatchRequestTypeRatePlans.prototype, "ratePlanId", void 0);
    return PutSubscriptionPatchRequestTypeRatePlans;
}(utils_1.SpeakeasyBase));
exports.PutSubscriptionPatchRequestTypeRatePlans = PutSubscriptionPatchRequestTypeRatePlans;
var PutSubscriptionPatchRequestType = /** @class */ (function (_super) {
    __extends(PutSubscriptionPatchRequestType, _super);
    function PutSubscriptionPatchRequestType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customFields" }),
        __metadata("design:type", Object)
    ], PutSubscriptionPatchRequestType.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratePlans", elemType: PutSubscriptionPatchRequestTypeRatePlans }),
        __metadata("design:type", Array)
    ], PutSubscriptionPatchRequestType.prototype, "ratePlans", void 0);
    return PutSubscriptionPatchRequestType;
}(utils_1.SpeakeasyBase));
exports.PutSubscriptionPatchRequestType = PutSubscriptionPatchRequestType;
