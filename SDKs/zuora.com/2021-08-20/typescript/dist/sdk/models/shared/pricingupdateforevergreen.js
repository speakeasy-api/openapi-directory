"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PricingUpdateForEvergreen = void 0;
var utils_1 = require("../../../internal/utils");
var chargemodeldataoverride_1 = require("./chargemodeldataoverride");
var discountpricingupdate_1 = require("./discountpricingupdate");
var recurringflatfeepricingupdate_1 = require("./recurringflatfeepricingupdate");
var recurringperunitpricingupdate_1 = require("./recurringperunitpricingupdate");
var recurringtieredpricingupdate_1 = require("./recurringtieredpricingupdate");
var recurringvolumepricingupdate_1 = require("./recurringvolumepricingupdate");
var usageflatfeepricingupdate_1 = require("./usageflatfeepricingupdate");
var usageoveragepricingupdate_1 = require("./usageoveragepricingupdate");
var usageperunitpricingupdate_1 = require("./usageperunitpricingupdate");
var usagetieredpricingupdate_1 = require("./usagetieredpricingupdate");
var usagetieredwithoveragepricingupdate_1 = require("./usagetieredwithoveragepricingupdate");
var usagevolumepricingupdate_1 = require("./usagevolumepricingupdate");
var class_transformer_1 = require("class-transformer");
var PricingUpdateForEvergreen = /** @class */ (function (_super) {
    __extends(PricingUpdateForEvergreen, _super);
    function PricingUpdateForEvergreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "chargeModelData" }),
        (0, class_transformer_1.Type)(function () { return chargemodeldataoverride_1.ChargeModelDataOverride; }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], PricingUpdateForEvergreen.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "discount" }),
        (0, class_transformer_1.Type)(function () { return discountpricingupdate_1.DiscountPricingUpdate; }),
        __metadata("design:type", discountpricingupdate_1.DiscountPricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringFlatFee" }),
        (0, class_transformer_1.Type)(function () { return recurringflatfeepricingupdate_1.RecurringFlatFeePricingUpdate; }),
        __metadata("design:type", recurringflatfeepricingupdate_1.RecurringFlatFeePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringPerUnit" }),
        (0, class_transformer_1.Type)(function () { return recurringperunitpricingupdate_1.RecurringPerUnitPricingUpdate; }),
        __metadata("design:type", recurringperunitpricingupdate_1.RecurringPerUnitPricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringTiered" }),
        (0, class_transformer_1.Type)(function () { return recurringtieredpricingupdate_1.RecurringTieredPricingUpdate; }),
        __metadata("design:type", recurringtieredpricingupdate_1.RecurringTieredPricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "recurringVolume" }),
        (0, class_transformer_1.Type)(function () { return recurringvolumepricingupdate_1.RecurringVolumePricingUpdate; }),
        __metadata("design:type", recurringvolumepricingupdate_1.RecurringVolumePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageFlatFee" }),
        (0, class_transformer_1.Type)(function () { return usageflatfeepricingupdate_1.UsageFlatFeePricingUpdate; }),
        __metadata("design:type", usageflatfeepricingupdate_1.UsageFlatFeePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageOverage" }),
        (0, class_transformer_1.Type)(function () { return usageoveragepricingupdate_1.UsageOveragePricingUpdate; }),
        __metadata("design:type", usageoveragepricingupdate_1.UsageOveragePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usagePerUnit" }),
        (0, class_transformer_1.Type)(function () { return usageperunitpricingupdate_1.UsagePerUnitPricingUpdate; }),
        __metadata("design:type", usageperunitpricingupdate_1.UsagePerUnitPricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageTiered" }),
        (0, class_transformer_1.Type)(function () { return usagetieredpricingupdate_1.UsageTieredPricingUpdate; }),
        __metadata("design:type", usagetieredpricingupdate_1.UsageTieredPricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageTieredWithOverage" }),
        (0, class_transformer_1.Type)(function () { return usagetieredwithoveragepricingupdate_1.UsageTieredWithOveragePricingUpdate; }),
        __metadata("design:type", usagetieredwithoveragepricingupdate_1.UsageTieredWithOveragePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "usageVolume" }),
        (0, class_transformer_1.Type)(function () { return usagevolumepricingupdate_1.UsageVolumePricingUpdate; }),
        __metadata("design:type", usagevolumepricingupdate_1.UsageVolumePricingUpdate)
    ], PricingUpdateForEvergreen.prototype, "usageVolume", void 0);
    return PricingUpdateForEvergreen;
}(utils_1.SpeakeasyBase));
exports.PricingUpdateForEvergreen = PricingUpdateForEvergreen;
