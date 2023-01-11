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
exports.OrderMetricsForEvergreen = void 0;
var utils_1 = require("../../../internal/utils");
var timeslicednetmetricsforevergreen_1 = require("./timeslicednetmetricsforevergreen");
var timeslicedmetricsforevergreen_1 = require("./timeslicedmetricsforevergreen");
var timeslicedtcbnetmetricsforevergreen_1 = require("./timeslicedtcbnetmetricsforevergreen");
var OrderMetricsForEvergreen = /** @class */ (function (_super) {
    __extends(OrderMetricsForEvergreen, _super);
    function OrderMetricsForEvergreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeNumber" }),
        __metadata("design:type", String)
    ], OrderMetricsForEvergreen.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mrr", elemType: timeslicednetmetricsforevergreen_1.TimeSlicedNetMetricsForEvergreen }),
        __metadata("design:type", Array)
    ], OrderMetricsForEvergreen.prototype, "mrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originRatePlanId" }),
        __metadata("design:type", String)
    ], OrderMetricsForEvergreen.prototype, "originRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanChargeId" }),
        __metadata("design:type", String)
    ], OrderMetricsForEvergreen.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productRatePlanId" }),
        __metadata("design:type", String)
    ], OrderMetricsForEvergreen.prototype, "productRatePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity", elemType: timeslicedmetricsforevergreen_1.TimeSlicedMetricsForEvergreen }),
        __metadata("design:type", Array)
    ], OrderMetricsForEvergreen.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcb", elemType: timeslicedtcbnetmetricsforevergreen_1.TimeSlicedTcbNetMetricsForEvergreen }),
        __metadata("design:type", Array)
    ], OrderMetricsForEvergreen.prototype, "tcb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tcv", elemType: timeslicednetmetricsforevergreen_1.TimeSlicedNetMetricsForEvergreen }),
        __metadata("design:type", Array)
    ], OrderMetricsForEvergreen.prototype, "tcv", void 0);
    return OrderMetricsForEvergreen;
}(utils_1.SpeakeasyBase));
exports.OrderMetricsForEvergreen = OrderMetricsForEvergreen;
