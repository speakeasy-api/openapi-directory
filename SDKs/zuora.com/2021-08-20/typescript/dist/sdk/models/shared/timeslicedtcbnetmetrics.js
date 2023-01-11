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
exports.TimeSlicedTcbNetMetrics = exports.TimeSlicedTcbNetMetricsTypeEnum = exports.TimeSlicedTcbNetMetricsGeneratedReasonEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TimeSlicedTcbNetMetricsGeneratedReasonEnum;
(function (TimeSlicedTcbNetMetricsGeneratedReasonEnum) {
    TimeSlicedTcbNetMetricsGeneratedReasonEnum["IncreaseQuantity"] = "IncreaseQuantity";
    TimeSlicedTcbNetMetricsGeneratedReasonEnum["DecreaseQuantity"] = "DecreaseQuantity";
    TimeSlicedTcbNetMetricsGeneratedReasonEnum["ChangePrice"] = "ChangePrice";
    TimeSlicedTcbNetMetricsGeneratedReasonEnum["Extension"] = "Extension";
    TimeSlicedTcbNetMetricsGeneratedReasonEnum["Contraction"] = "Contraction";
})(TimeSlicedTcbNetMetricsGeneratedReasonEnum = exports.TimeSlicedTcbNetMetricsGeneratedReasonEnum || (exports.TimeSlicedTcbNetMetricsGeneratedReasonEnum = {}));
var TimeSlicedTcbNetMetricsTypeEnum;
(function (TimeSlicedTcbNetMetricsTypeEnum) {
    TimeSlicedTcbNetMetricsTypeEnum["Regular"] = "Regular";
    TimeSlicedTcbNetMetricsTypeEnum["Discount"] = "Discount";
})(TimeSlicedTcbNetMetricsTypeEnum = exports.TimeSlicedTcbNetMetricsTypeEnum || (exports.TimeSlicedTcbNetMetricsTypeEnum = {}));
var TimeSlicedTcbNetMetrics = /** @class */ (function (_super) {
    __extends(TimeSlicedTcbNetMetrics, _super);
    function TimeSlicedTcbNetMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], TimeSlicedTcbNetMetrics.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountChargeNumber" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "discountChargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], TimeSlicedTcbNetMetrics.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generatedReason" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "generatedReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceOwner" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "invoiceOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItemId" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "orderItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], TimeSlicedTcbNetMetrics.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionOwner" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "subscriptionOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax" }),
        __metadata("design:type", Number)
    ], TimeSlicedTcbNetMetrics.prototype, "tax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termNumber" }),
        __metadata("design:type", Number)
    ], TimeSlicedTcbNetMetrics.prototype, "termNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TimeSlicedTcbNetMetrics.prototype, "type", void 0);
    return TimeSlicedTcbNetMetrics;
}(utils_1.SpeakeasyBase));
exports.TimeSlicedTcbNetMetrics = TimeSlicedTcbNetMetrics;
