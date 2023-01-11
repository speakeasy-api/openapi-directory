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
exports.RampIntervalChargeMetrics = exports.RampIntervalChargeMetricsMrr = void 0;
var utils_1 = require("../../../internal/utils");
var RampIntervalChargeMetricsMrr = /** @class */ (function (_super) {
    __extends(RampIntervalChargeMetricsMrr, _super);
    function RampIntervalChargeMetricsMrr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetricsMrr.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeMetricsMrr.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetricsMrr.prototype, "gross", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetricsMrr.prototype, "net", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeMetricsMrr.prototype, "startDate", void 0);
    return RampIntervalChargeMetricsMrr;
}(utils_1.SpeakeasyBase));
exports.RampIntervalChargeMetricsMrr = RampIntervalChargeMetricsMrr;
var RampIntervalChargeMetrics = /** @class */ (function (_super) {
    __extends(RampIntervalChargeMetrics, _super);
    function RampIntervalChargeMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], RampIntervalChargeMetrics.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "discountTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "discountTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeMetrics.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grossTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "grossTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grossTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "grossTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrr", elemType: RampIntervalChargeMetricsMrr }),
        __metadata("design:type", Array)
    ], RampIntervalChargeMetrics.prototype, "mrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netTcb" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "netTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netTcv" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "netTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], RampIntervalChargeMetrics.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], RampIntervalChargeMetrics.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratePlanChargeId" }),
        __metadata("design:type", String)
    ], RampIntervalChargeMetrics.prototype, "ratePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], RampIntervalChargeMetrics.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionNumber" }),
        __metadata("design:type", String)
    ], RampIntervalChargeMetrics.prototype, "subscriptionNumber", void 0);
    return RampIntervalChargeMetrics;
}(utils_1.SpeakeasyBase));
exports.RampIntervalChargeMetrics = RampIntervalChargeMetrics;
