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
exports.OrderMetric = void 0;
var utils_1 = require("../../../internal/utils");
var timeslicedelpnetmetrics_1 = require("./timeslicedelpnetmetrics");
var timeslicednetmetrics_1 = require("./timeslicednetmetrics");
var timeslicedmetrics_1 = require("./timeslicedmetrics");
var timeslicedtcbnetmetrics_1 = require("./timeslicedtcbnetmetrics");
// OrderMetric
/**
 * The set of order metrics for an order action.
**/
var OrderMetric = /** @class */ (function (_super) {
    __extends(OrderMetric, _super);
    function OrderMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], OrderMetric.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elp", elemType: timeslicedelpnetmetrics_1.TimeSlicedElpNetMetrics }),
        __metadata("design:type", Array)
    ], OrderMetric.prototype, "elp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrr", elemType: timeslicednetmetrics_1.TimeSlicedNetMetrics }),
        __metadata("design:type", Array)
    ], OrderMetric.prototype, "mrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originRatePlanId" }),
        __metadata("design:type", String)
    ], OrderMetric.prototype, "originRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], OrderMetric.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanId" }),
        __metadata("design:type", String)
    ], OrderMetric.prototype, "productRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity", elemType: timeslicedmetrics_1.TimeSlicedMetrics }),
        __metadata("design:type", Array)
    ], OrderMetric.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcb", elemType: timeslicedtcbnetmetrics_1.TimeSlicedTcbNetMetrics }),
        __metadata("design:type", Array)
    ], OrderMetric.prototype, "tcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcv", elemType: timeslicednetmetrics_1.TimeSlicedNetMetrics }),
        __metadata("design:type", Array)
    ], OrderMetric.prototype, "tcv", void 0);
    return OrderMetric;
}(utils_1.SpeakeasyBase));
exports.OrderMetric = OrderMetric;
