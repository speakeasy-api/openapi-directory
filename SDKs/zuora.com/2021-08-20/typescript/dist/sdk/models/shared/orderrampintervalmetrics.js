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
exports.OrderRampIntervalMetrics = void 0;
var utils_1 = require("../../../internal/utils");
var rampintervalchargedeltametrics_1 = require("./rampintervalchargedeltametrics");
var rampintervalchargemetrics_1 = require("./rampintervalchargemetrics");
var OrderRampIntervalMetrics = /** @class */ (function (_super) {
    __extends(OrderRampIntervalMetrics, _super);
    function OrderRampIntervalMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OrderRampIntervalMetrics.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountTcb" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "discountTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountTcv" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "discountTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], OrderRampIntervalMetrics.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grossTcb" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "grossTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=grossTcv" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "grossTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intervalDeltaMetrics", elemType: rampintervalchargedeltametrics_1.RampIntervalChargeDeltaMetrics }),
        __metadata("design:type", Array)
    ], OrderRampIntervalMetrics.prototype, "intervalDeltaMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intervalMetrics", elemType: rampintervalchargemetrics_1.RampIntervalChargeMetrics }),
        __metadata("design:type", Array)
    ], OrderRampIntervalMetrics.prototype, "intervalMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrderRampIntervalMetrics.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netTcb" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "netTcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netTcv" }),
        __metadata("design:type", Number)
    ], OrderRampIntervalMetrics.prototype, "netTcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], OrderRampIntervalMetrics.prototype, "startDate", void 0);
    return OrderRampIntervalMetrics;
}(utils_1.SpeakeasyBase));
exports.OrderRampIntervalMetrics = OrderRampIntervalMetrics;
