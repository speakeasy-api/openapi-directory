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
exports.UsageOveragePricingOverride = exports.UsageOveragePricingOverridePriceChangeOptionEnum = exports.UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum;
(function (UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum) {
    UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum["NoCredit"] = "NoCredit";
    UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum["CreditBySpecificRate"] = "CreditBySpecificRate";
})(UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = exports.UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum || (exports.UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum = {}));
var UsageOveragePricingOverridePriceChangeOptionEnum;
(function (UsageOveragePricingOverridePriceChangeOptionEnum) {
    UsageOveragePricingOverridePriceChangeOptionEnum["NoChange"] = "NoChange";
    UsageOveragePricingOverridePriceChangeOptionEnum["SpecificPercentageValue"] = "SpecificPercentageValue";
    UsageOveragePricingOverridePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(UsageOveragePricingOverridePriceChangeOptionEnum = exports.UsageOveragePricingOverridePriceChangeOptionEnum || (exports.UsageOveragePricingOverridePriceChangeOptionEnum = {}));
// UsageOveragePricingOverride
/**
 * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
 *
**/
var UsageOveragePricingOverride = /** @class */ (function (_super) {
    __extends(UsageOveragePricingOverride, _super);
    function UsageOveragePricingOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includedUnits" }),
        __metadata("design:type", Number)
    ], UsageOveragePricingOverride.prototype, "includedUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfPeriods" }),
        __metadata("design:type", Number)
    ], UsageOveragePricingOverride.prototype, "numberOfPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overagePrice" }),
        __metadata("design:type", Number)
    ], UsageOveragePricingOverride.prototype, "overagePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overageUnusedUnitsCreditOption" }),
        __metadata("design:type", String)
    ], UsageOveragePricingOverride.prototype, "overageUnusedUnitsCreditOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], UsageOveragePricingOverride.prototype, "priceChangeOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceIncreasePercentage" }),
        __metadata("design:type", Number)
    ], UsageOveragePricingOverride.prototype, "priceIncreasePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unusedUnitsCreditRates" }),
        __metadata("design:type", Number)
    ], UsageOveragePricingOverride.prototype, "unusedUnitsCreditRates", void 0);
    return UsageOveragePricingOverride;
}(utils_1.SpeakeasyBase));
exports.UsageOveragePricingOverride = UsageOveragePricingOverride;
