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
exports.RecurringTieredPricingOverride = exports.RecurringTieredPricingOverridePriceChangeOptionEnum = exports.RecurringTieredPricingOverrideListPriceBaseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var chargetier_1 = require("./chargetier");
var RecurringTieredPricingOverrideListPriceBaseEnum;
(function (RecurringTieredPricingOverrideListPriceBaseEnum) {
    RecurringTieredPricingOverrideListPriceBaseEnum["PerBillingPeriod"] = "Per_Billing_Period";
    RecurringTieredPricingOverrideListPriceBaseEnum["PerMonth"] = "Per_Month";
    RecurringTieredPricingOverrideListPriceBaseEnum["PerWeek"] = "Per_Week";
})(RecurringTieredPricingOverrideListPriceBaseEnum = exports.RecurringTieredPricingOverrideListPriceBaseEnum || (exports.RecurringTieredPricingOverrideListPriceBaseEnum = {}));
var RecurringTieredPricingOverridePriceChangeOptionEnum;
(function (RecurringTieredPricingOverridePriceChangeOptionEnum) {
    RecurringTieredPricingOverridePriceChangeOptionEnum["NoChange"] = "NoChange";
    RecurringTieredPricingOverridePriceChangeOptionEnum["SpecificPercentageValue"] = "SpecificPercentageValue";
    RecurringTieredPricingOverridePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(RecurringTieredPricingOverridePriceChangeOptionEnum = exports.RecurringTieredPricingOverridePriceChangeOptionEnum || (exports.RecurringTieredPricingOverridePriceChangeOptionEnum = {}));
// RecurringTieredPricingOverride
/**
 * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 *
**/
var RecurringTieredPricingOverride = /** @class */ (function (_super) {
    __extends(RecurringTieredPricingOverride, _super);
    function RecurringTieredPricingOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listPriceBase" }),
        __metadata("design:type", String)
    ], RecurringTieredPricingOverride.prototype, "listPriceBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], RecurringTieredPricingOverride.prototype, "priceChangeOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceIncreasePercentage" }),
        __metadata("design:type", Number)
    ], RecurringTieredPricingOverride.prototype, "priceIncreasePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], RecurringTieredPricingOverride.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tiers", elemType: chargetier_1.ChargeTier }),
        __metadata("design:type", Array)
    ], RecurringTieredPricingOverride.prototype, "tiers", void 0);
    return RecurringTieredPricingOverride;
}(utils_1.SpeakeasyBase));
exports.RecurringTieredPricingOverride = RecurringTieredPricingOverride;
