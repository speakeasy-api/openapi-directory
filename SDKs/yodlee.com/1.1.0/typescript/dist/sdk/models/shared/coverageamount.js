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
exports.CoverageAmount = exports.CoverageAmountUnitTypeEnum = exports.CoverageAmountTypeEnum = exports.CoverageAmountLimitTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var money_1 = require("./money");
var CoverageAmountLimitTypeEnum;
(function (CoverageAmountLimitTypeEnum) {
    CoverageAmountLimitTypeEnum["InNetwork"] = "IN_NETWORK";
    CoverageAmountLimitTypeEnum["OutNetwork"] = "OUT_NETWORK";
})(CoverageAmountLimitTypeEnum = exports.CoverageAmountLimitTypeEnum || (exports.CoverageAmountLimitTypeEnum = {}));
var CoverageAmountTypeEnum;
(function (CoverageAmountTypeEnum) {
    CoverageAmountTypeEnum["Deductible"] = "DEDUCTIBLE";
    CoverageAmountTypeEnum["OutOfPocket"] = "OUT_OF_POCKET";
    CoverageAmountTypeEnum["AnnualBenefit"] = "ANNUAL_BENEFIT";
    CoverageAmountTypeEnum["MaxBenefit"] = "MAX_BENEFIT";
    CoverageAmountTypeEnum["CoverageAmount"] = "COVERAGE_AMOUNT";
    CoverageAmountTypeEnum["MonthlyBenefit"] = "MONTHLY_BENEFIT";
    CoverageAmountTypeEnum["Other"] = "OTHER";
})(CoverageAmountTypeEnum = exports.CoverageAmountTypeEnum || (exports.CoverageAmountTypeEnum = {}));
var CoverageAmountUnitTypeEnum;
(function (CoverageAmountUnitTypeEnum) {
    CoverageAmountUnitTypeEnum["PerFamily"] = "PER_FAMILY";
    CoverageAmountUnitTypeEnum["PerMember"] = "PER_MEMBER";
})(CoverageAmountUnitTypeEnum = exports.CoverageAmountUnitTypeEnum || (exports.CoverageAmountUnitTypeEnum = {}));
var CoverageAmount = /** @class */ (function (_super) {
    __extends(CoverageAmount, _super);
    function CoverageAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover" }),
        __metadata("design:type", money_1.Money)
    ], CoverageAmount.prototype, "cover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitType" }),
        __metadata("design:type", String)
    ], CoverageAmount.prototype, "limitType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=met" }),
        __metadata("design:type", money_1.Money)
    ], CoverageAmount.prototype, "met", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CoverageAmount.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitType" }),
        __metadata("design:type", String)
    ], CoverageAmount.prototype, "unitType", void 0);
    return CoverageAmount;
}(utils_1.SpeakeasyBase));
exports.CoverageAmount = CoverageAmount;
