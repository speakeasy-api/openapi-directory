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
exports.UsageTieredWithOveragePricingUpdate = exports.UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var chargetier_1 = require("./chargetier");
var UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum;
(function (UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum) {
    UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum["NoChange"] = "NoChange";
    UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum["SpecificPercentageValue"] = "SpecificPercentageValue";
    UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum["UseLatestProductCatalogPricing"] = "UseLatestProductCatalogPricing";
})(UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = exports.UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum || (exports.UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum = {}));
var UsageTieredWithOveragePricingUpdate = /** @class */ (function (_super) {
    __extends(UsageTieredWithOveragePricingUpdate, _super);
    function UsageTieredWithOveragePricingUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overagePrice" }),
        __metadata("design:type", Number)
    ], UsageTieredWithOveragePricingUpdate.prototype, "overagePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceChangeOption" }),
        __metadata("design:type", String)
    ], UsageTieredWithOveragePricingUpdate.prototype, "priceChangeOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceIncreasePercentage" }),
        __metadata("design:type", Number)
    ], UsageTieredWithOveragePricingUpdate.prototype, "priceIncreasePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tiers", elemType: chargetier_1.ChargeTier }),
        __metadata("design:type", Array)
    ], UsageTieredWithOveragePricingUpdate.prototype, "tiers", void 0);
    return UsageTieredWithOveragePricingUpdate;
}(utils_1.SpeakeasyBase));
exports.UsageTieredWithOveragePricingUpdate = UsageTieredWithOveragePricingUpdate;
