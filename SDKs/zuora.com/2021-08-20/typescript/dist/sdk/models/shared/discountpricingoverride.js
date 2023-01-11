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
exports.DiscountPricingOverride = exports.DiscountPricingOverridePriceChangeOptionEnum = exports.DiscountPricingOverrideDiscountLevelEnum = exports.DiscountPricingOverrideApplyDiscountToEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DiscountPricingOverrideApplyDiscountToEnum;
(function (DiscountPricingOverrideApplyDiscountToEnum) {
    DiscountPricingOverrideApplyDiscountToEnum["Onetime"] = "ONETIME";
    DiscountPricingOverrideApplyDiscountToEnum["Recurring"] = "RECURRING";
    DiscountPricingOverrideApplyDiscountToEnum["Usage"] = "USAGE";
    DiscountPricingOverrideApplyDiscountToEnum["Onetimerecurring"] = "ONETIMERECURRING";
    DiscountPricingOverrideApplyDiscountToEnum["Onetimeusage"] = "ONETIMEUSAGE";
    DiscountPricingOverrideApplyDiscountToEnum["Recurringusage"] = "RECURRINGUSAGE";
    DiscountPricingOverrideApplyDiscountToEnum["Onetimerecurringusage"] = "ONETIMERECURRINGUSAGE";
})(DiscountPricingOverrideApplyDiscountToEnum = exports.DiscountPricingOverrideApplyDiscountToEnum || (exports.DiscountPricingOverrideApplyDiscountToEnum = {}));
var DiscountPricingOverrideDiscountLevelEnum;
(function (DiscountPricingOverrideDiscountLevelEnum) {
    DiscountPricingOverrideDiscountLevelEnum["Rateplan"] = "rateplan";
    DiscountPricingOverrideDiscountLevelEnum["Subscription"] = "subscription";
    DiscountPricingOverrideDiscountLevelEnum["Account"] = "account";
})(DiscountPricingOverrideDiscountLevelEnum = exports.DiscountPricingOverrideDiscountLevelEnum || (exports.DiscountPricingOverrideDiscountLevelEnum = {}));
var DiscountPricingOverridePriceChangeOptionEnum;
(function (DiscountPricingOverridePriceChangeOptionEnum) {
    DiscountPricingOverridePriceChangeOptionEnum["NoChange"] = "NoChange";
    DiscountPricingOverridePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(DiscountPricingOverridePriceChangeOptionEnum = exports.DiscountPricingOverridePriceChangeOptionEnum || (exports.DiscountPricingOverridePriceChangeOptionEnum = {}));
// DiscountPricingOverride
/**
 * Pricing information about a discount charge.
 *
**/
var DiscountPricingOverride = /** @class */ (function (_super) {
    __extends(DiscountPricingOverride, _super);
    function DiscountPricingOverride() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applyDiscountTo" }),
        __metadata("design:type", String)
    ], DiscountPricingOverride.prototype, "applyDiscountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountAmount" }),
        __metadata("design:type", Number)
    ], DiscountPricingOverride.prototype, "discountAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountLevel" }),
        __metadata("design:type", String)
    ], DiscountPricingOverride.prototype, "discountLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountPercentage" }),
        __metadata("design:type", Number)
    ], DiscountPricingOverride.prototype, "discountPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], DiscountPricingOverride.prototype, "priceChangeOption", void 0);
    return DiscountPricingOverride;
}(utils_1.SpeakeasyBase));
exports.DiscountPricingOverride = DiscountPricingOverride;
