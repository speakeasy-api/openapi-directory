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
exports.UsageTieredPricingOverride = exports.UsageTieredPricingOverrideRatingGroupEnum = exports.UsageTieredPricingOverridePriceChangeOptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var chargetier_1 = require("./chargetier");
var UsageTieredPricingOverridePriceChangeOptionEnum;
(function (UsageTieredPricingOverridePriceChangeOptionEnum) {
    UsageTieredPricingOverridePriceChangeOptionEnum["NoChange"] = "NoChange";
    UsageTieredPricingOverridePriceChangeOptionEnum["SpecificPercentageValue"] = "SpecificPercentageValue";
    UsageTieredPricingOverridePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(UsageTieredPricingOverridePriceChangeOptionEnum = exports.UsageTieredPricingOverridePriceChangeOptionEnum || (exports.UsageTieredPricingOverridePriceChangeOptionEnum = {}));
var UsageTieredPricingOverrideRatingGroupEnum;
(function (UsageTieredPricingOverrideRatingGroupEnum) {
    UsageTieredPricingOverrideRatingGroupEnum["ByBillingPeriod"] = "ByBillingPeriod";
    UsageTieredPricingOverrideRatingGroupEnum["ByUsageStartDate"] = "ByUsageStartDate";
    UsageTieredPricingOverrideRatingGroupEnum["ByUsageRecord"] = "ByUsageRecord";
    UsageTieredPricingOverrideRatingGroupEnum["ByUsageUpload"] = "ByUsageUpload";
})(UsageTieredPricingOverrideRatingGroupEnum = exports.UsageTieredPricingOverrideRatingGroupEnum || (exports.UsageTieredPricingOverrideRatingGroupEnum = {}));
// UsageTieredPricingOverride
/**
 * Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
 *
**/
var UsageTieredPricingOverride = /** @class */ (function (_super) {
    __extends(UsageTieredPricingOverride, _super);
    function UsageTieredPricingOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], UsageTieredPricingOverride.prototype, "priceChangeOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceIncreasePercentage" }),
        __metadata("design:type", Number)
    ], UsageTieredPricingOverride.prototype, "priceIncreasePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ratingGroup" }),
        __metadata("design:type", String)
    ], UsageTieredPricingOverride.prototype, "ratingGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tiers", elemType: chargetier_1.ChargeTier }),
        __metadata("design:type", Array)
    ], UsageTieredPricingOverride.prototype, "tiers", void 0);
    return UsageTieredPricingOverride;
}(utils_1.SpeakeasyBase));
exports.UsageTieredPricingOverride = UsageTieredPricingOverride;
