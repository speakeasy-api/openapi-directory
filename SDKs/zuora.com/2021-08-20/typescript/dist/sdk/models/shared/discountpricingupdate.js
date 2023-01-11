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
exports.DiscountPricingUpdate = exports.DiscountPricingUpdatePriceChangeOptionEnum = exports.DiscountPricingUpdateDiscountLevelEnum = exports.DiscountPricingUpdateApplyDiscountToEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DiscountPricingUpdateApplyDiscountToEnum;
(function (DiscountPricingUpdateApplyDiscountToEnum) {
    DiscountPricingUpdateApplyDiscountToEnum["Onetime"] = "ONETIME";
    DiscountPricingUpdateApplyDiscountToEnum["Recurring"] = "RECURRING";
    DiscountPricingUpdateApplyDiscountToEnum["Usage"] = "USAGE";
    DiscountPricingUpdateApplyDiscountToEnum["Onetimerecurring"] = "ONETIMERECURRING";
    DiscountPricingUpdateApplyDiscountToEnum["Onetimeusage"] = "ONETIMEUSAGE";
    DiscountPricingUpdateApplyDiscountToEnum["Recurringusage"] = "RECURRINGUSAGE";
    DiscountPricingUpdateApplyDiscountToEnum["Onetimerecurringusage"] = "ONETIMERECURRINGUSAGE";
})(DiscountPricingUpdateApplyDiscountToEnum = exports.DiscountPricingUpdateApplyDiscountToEnum || (exports.DiscountPricingUpdateApplyDiscountToEnum = {}));
var DiscountPricingUpdateDiscountLevelEnum;
(function (DiscountPricingUpdateDiscountLevelEnum) {
    DiscountPricingUpdateDiscountLevelEnum["Rateplan"] = "rateplan";
    DiscountPricingUpdateDiscountLevelEnum["Subscription"] = "subscription";
    DiscountPricingUpdateDiscountLevelEnum["Account"] = "account";
})(DiscountPricingUpdateDiscountLevelEnum = exports.DiscountPricingUpdateDiscountLevelEnum || (exports.DiscountPricingUpdateDiscountLevelEnum = {}));
var DiscountPricingUpdatePriceChangeOptionEnum;
(function (DiscountPricingUpdatePriceChangeOptionEnum) {
    DiscountPricingUpdatePriceChangeOptionEnum["NoChange"] = "NoChange";
    DiscountPricingUpdatePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(DiscountPricingUpdatePriceChangeOptionEnum = exports.DiscountPricingUpdatePriceChangeOptionEnum || (exports.DiscountPricingUpdatePriceChangeOptionEnum = {}));
var DiscountPricingUpdate = /** @class */ (function (_super) {
    __extends(DiscountPricingUpdate, _super);
    function DiscountPricingUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applyDiscountTo" }),
        __metadata("design:type", String)
    ], DiscountPricingUpdate.prototype, "applyDiscountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountLevel" }),
        __metadata("design:type", String)
    ], DiscountPricingUpdate.prototype, "discountLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountPercentage" }),
        __metadata("design:type", Number)
    ], DiscountPricingUpdate.prototype, "discountPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], DiscountPricingUpdate.prototype, "priceChangeOption", void 0);
    return DiscountPricingUpdate;
}(utils_1.SpeakeasyBase));
exports.DiscountPricingUpdate = DiscountPricingUpdate;
