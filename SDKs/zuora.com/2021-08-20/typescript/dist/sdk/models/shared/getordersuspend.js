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
exports.GetOrderSuspend = exports.GetOrderSuspendSuspendPolicyEnum = exports.GetOrderSuspendSuspendPeriodsTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrderSuspendSuspendPeriodsTypeEnum;
(function (GetOrderSuspendSuspendPeriodsTypeEnum) {
    GetOrderSuspendSuspendPeriodsTypeEnum["Day"] = "Day";
    GetOrderSuspendSuspendPeriodsTypeEnum["Week"] = "Week";
    GetOrderSuspendSuspendPeriodsTypeEnum["Month"] = "Month";
    GetOrderSuspendSuspendPeriodsTypeEnum["Year"] = "Year";
})(GetOrderSuspendSuspendPeriodsTypeEnum = exports.GetOrderSuspendSuspendPeriodsTypeEnum || (exports.GetOrderSuspendSuspendPeriodsTypeEnum = {}));
var GetOrderSuspendSuspendPolicyEnum;
(function (GetOrderSuspendSuspendPolicyEnum) {
    GetOrderSuspendSuspendPolicyEnum["Today"] = "Today";
    GetOrderSuspendSuspendPolicyEnum["EndOfLastInvoicePeriod"] = "EndOfLastInvoicePeriod";
    GetOrderSuspendSuspendPolicyEnum["FixedPeriodsFromToday"] = "FixedPeriodsFromToday";
    GetOrderSuspendSuspendPolicyEnum["SpecificDate"] = "SpecificDate";
})(GetOrderSuspendSuspendPolicyEnum = exports.GetOrderSuspendSuspendPolicyEnum || (exports.GetOrderSuspendSuspendPolicyEnum = {}));
// GetOrderSuspend
/**
 * Information about an order action of type `Suspend`.
 *
**/
var GetOrderSuspend = /** @class */ (function (_super) {
    __extends(GetOrderSuspend, _super);
    function GetOrderSuspend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendDate" }),
        __metadata("design:type", Date)
    ], GetOrderSuspend.prototype, "suspendDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendPeriods" }),
        __metadata("design:type", Number)
    ], GetOrderSuspend.prototype, "suspendPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendPeriodsType" }),
        __metadata("design:type", String)
    ], GetOrderSuspend.prototype, "suspendPeriodsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendPolicy" }),
        __metadata("design:type", String)
    ], GetOrderSuspend.prototype, "suspendPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendSpecificDate" }),
        __metadata("design:type", Date)
    ], GetOrderSuspend.prototype, "suspendSpecificDate", void 0);
    return GetOrderSuspend;
}(utils_1.SpeakeasyBase));
exports.GetOrderSuspend = GetOrderSuspend;
