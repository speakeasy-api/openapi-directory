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
exports.ChargeMetricsResponse = void 0;
var utils_1 = require("../../../internal/utils");
var ChargeMetricsResponse = /** @class */ (function (_super) {
    __extends(ChargeMetricsResponse, _super);
    function ChargeMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amendmentId" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "amendmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amendmentType" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "amendmentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdOn" }),
        __metadata("design:type", Date)
    ], ChargeMetricsResponse.prototype, "createdOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], ChargeMetricsResponse.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], ChargeMetricsResponse.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceOwnerAccountNumber" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "invoiceOwnerAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrrDiscountAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "mrrDiscountAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrrGrossAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "mrrGrossAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrrNetAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "mrrNetAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanId" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "productRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratePlanChargeId" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "ratePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], ChargeMetricsResponse.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionName" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "subscriptionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionOwnerAccountNumber" }),
        __metadata("design:type", String)
    ], ChargeMetricsResponse.prototype, "subscriptionOwnerAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcvDiscountAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "tcvDiscountAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcvGrossAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "tcvGrossAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcvNetAmount" }),
        __metadata("design:type", Number)
    ], ChargeMetricsResponse.prototype, "tcvNetAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedOn" }),
        __metadata("design:type", Date)
    ], ChargeMetricsResponse.prototype, "updatedOn", void 0);
    return ChargeMetricsResponse;
}(utils_1.SpeakeasyBase));
exports.ChargeMetricsResponse = ChargeMetricsResponse;
