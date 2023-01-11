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
exports.RampIntervalChargeDeltaMetrics = exports.RampIntervalChargeDeltaMetricsDeltaQuantity = exports.RampIntervalChargeDeltaMetricsDeltaMrr = void 0;
var utils_1 = require("../../../internal/utils");
var RampIntervalChargeDeltaMetricsDeltaMrr = /** @class */ (function (_super) {
    __extends(RampIntervalChargeDeltaMetricsDeltaMrr, _super);
    function RampIntervalChargeDeltaMetricsDeltaMrr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetricsDeltaMrr.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeDeltaMetricsDeltaMrr.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetricsDeltaMrr.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetricsDeltaMrr.prototype, "net", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeDeltaMetricsDeltaMrr.prototype, "startDate", void 0);
    return RampIntervalChargeDeltaMetricsDeltaMrr;
}(utils_1.SpeakeasyBase));
exports.RampIntervalChargeDeltaMetricsDeltaMrr = RampIntervalChargeDeltaMetricsDeltaMrr;
var RampIntervalChargeDeltaMetricsDeltaQuantity = /** @class */ (function (_super) {
    __extends(RampIntervalChargeDeltaMetricsDeltaQuantity, _super);
    function RampIntervalChargeDeltaMetricsDeltaQuantity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetricsDeltaQuantity.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeDeltaMetricsDeltaQuantity.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeDeltaMetricsDeltaQuantity.prototype, "startDate", void 0);
    return RampIntervalChargeDeltaMetricsDeltaQuantity;
}(utils_1.SpeakeasyBase));
exports.RampIntervalChargeDeltaMetricsDeltaQuantity = RampIntervalChargeDeltaMetricsDeltaQuantity;
var RampIntervalChargeDeltaMetrics = /** @class */ (function (_super) {
    __extends(RampIntervalChargeDeltaMetrics, _super);
    function RampIntervalChargeDeltaMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], RampIntervalChargeDeltaMetrics.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaDiscountTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaDiscountTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaDiscountTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaDiscountTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaGrossTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaGrossTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaGrossTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaGrossTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaMrr", elemType: RampIntervalChargeDeltaMetricsDeltaMrr }),
        __metadata("design:type", Array)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaMrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaNetTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaNetTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaNetTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaNetTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deltaQuantity", elemType: RampIntervalChargeDeltaMetricsDeltaQuantity }),
        __metadata("design:type", Array)
    ], RampIntervalChargeDeltaMetrics.prototype, "deltaQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], RampIntervalChargeDeltaMetrics.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], RampIntervalChargeDeltaMetrics.prototype, "subscriptionNumber", void 0);
    return RampIntervalChargeDeltaMetrics;
}(utils_1.SpeakeasyBase));
exports.RampIntervalChargeDeltaMetrics = RampIntervalChargeDeltaMetrics;
