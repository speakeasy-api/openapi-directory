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
exports.CreateOrderPricingUpdate = void 0;
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
var CreateOrderPricingUpdate = /** @class */ (function (_super) {
    __extends(CreateOrderPricingUpdate, _super);
    function CreateOrderPricingUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeModelData" }),
        __metadata("design:type", chargemodeldataoverride_1.ChargeModelDataOverride)
    ], CreateOrderPricingUpdate.prototype, "chargeModelData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discount" }),
        __metadata("design:type", discountpricingupdate_1.DiscountPricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "discount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringFlatFee" }),
        __metadata("design:type", recurringflatfeepricingupdate_1.RecurringFlatFeePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "recurringFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringPerUnit" }),
        __metadata("design:type", recurringperunitpricingupdate_1.RecurringPerUnitPricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "recurringPerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringTiered" }),
        __metadata("design:type", recurringtieredpricingupdate_1.RecurringTieredPricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "recurringTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recurringVolume" }),
        __metadata("design:type", recurringvolumepricingupdate_1.RecurringVolumePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "recurringVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageFlatFee" }),
        __metadata("design:type", usageflatfeepricingupdate_1.UsageFlatFeePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usageFlatFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageOverage" }),
        __metadata("design:type", usageoveragepricingupdate_1.UsageOveragePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usageOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usagePerUnit" }),
        __metadata("design:type", usageperunitpricingupdate_1.UsagePerUnitPricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usagePerUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTiered" }),
        __metadata("design:type", usagetieredpricingupdate_1.UsageTieredPricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usageTiered", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageTieredWithOverage" }),
        __metadata("design:type", usagetieredwithoveragepricingupdate_1.UsageTieredWithOveragePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usageTieredWithOverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usageVolume" }),
        __metadata("design:type", usagevolumepricingupdate_1.UsageVolumePricingUpdate)
    ], CreateOrderPricingUpdate.prototype, "usageVolume", void 0);
    return CreateOrderPricingUpdate;
}(utils_1.SpeakeasyBase));
exports.CreateOrderPricingUpdate = CreateOrderPricingUpdate;
