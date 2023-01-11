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
exports.TimeSlicedElpNetMetrics = exports.TimeSlicedElpNetMetricsTypeEnum = exports.TimeSlicedElpNetMetricsGeneratedReasonEnum = void 0;
var utils_1 = require("../../../internal/utils");
var TimeSlicedElpNetMetricsGeneratedReasonEnum;
(function (TimeSlicedElpNetMetricsGeneratedReasonEnum) {
    TimeSlicedElpNetMetricsGeneratedReasonEnum["IncreaseQuantity"] = "IncreaseQuantity";
    TimeSlicedElpNetMetricsGeneratedReasonEnum["DecreaseQuantity"] = "DecreaseQuantity";
    TimeSlicedElpNetMetricsGeneratedReasonEnum["ChangePrice"] = "ChangePrice";
    TimeSlicedElpNetMetricsGeneratedReasonEnum["Extension"] = "Extension";
    TimeSlicedElpNetMetricsGeneratedReasonEnum["Contraction"] = "Contraction";
})(TimeSlicedElpNetMetricsGeneratedReasonEnum = exports.TimeSlicedElpNetMetricsGeneratedReasonEnum || (exports.TimeSlicedElpNetMetricsGeneratedReasonEnum = {}));
var TimeSlicedElpNetMetricsTypeEnum;
(function (TimeSlicedElpNetMetricsTypeEnum) {
    TimeSlicedElpNetMetricsTypeEnum["Regular"] = "Regular";
    TimeSlicedElpNetMetricsTypeEnum["Discount"] = "Discount";
})(TimeSlicedElpNetMetricsTypeEnum = exports.TimeSlicedElpNetMetricsTypeEnum || (exports.TimeSlicedElpNetMetricsTypeEnum = {}));
var TimeSlicedElpNetMetrics = /** @class */ (function (_super) {
    __extends(TimeSlicedElpNetMetrics, _super);
    function TimeSlicedElpNetMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], TimeSlicedElpNetMetrics.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", Date)
    ], TimeSlicedElpNetMetrics.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generatedReason" }),
        __metadata("design:type", String)
    ], TimeSlicedElpNetMetrics.prototype, "generatedReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoiceOwner" }),
        __metadata("design:type", String)
    ], TimeSlicedElpNetMetrics.prototype, "invoiceOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItemId" }),
        __metadata("design:type", String)
    ], TimeSlicedElpNetMetrics.prototype, "orderItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], TimeSlicedElpNetMetrics.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionOwner" }),
        __metadata("design:type", String)
    ], TimeSlicedElpNetMetrics.prototype, "subscriptionOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax" }),
        __metadata("design:type", Number)
    ], TimeSlicedElpNetMetrics.prototype, "tax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=termNumber" }),
        __metadata("design:type", Number)
    ], TimeSlicedElpNetMetrics.prototype, "termNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TimeSlicedElpNetMetrics.prototype, "type", void 0);
    return TimeSlicedElpNetMetrics;
}(utils_1.SpeakeasyBase));
exports.TimeSlicedElpNetMetrics = TimeSlicedElpNetMetrics;
