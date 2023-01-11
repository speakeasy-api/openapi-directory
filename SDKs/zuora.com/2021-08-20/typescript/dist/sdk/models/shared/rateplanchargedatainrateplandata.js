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
exports.RatePlanChargeDataInRatePlanData = exports.RatePlanChargeDataInRatePlanDataRatePlanCharge = void 0;
var utils_1 = require("../../../internal/utils");
var rateplanchargetier_1 = require("./rateplanchargetier");
var RatePlanChargeDataInRatePlanDataRatePlanCharge = /** @class */ (function (_super) {
    __extends(RatePlanChargeDataInRatePlanDataRatePlanCharge, _super);
    function RatePlanChargeDataInRatePlanDataRatePlanCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountingCode" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "accountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApplyDiscountTo" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "applyDiscountTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillCycleDay" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "billCycleDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillCycleType" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "billCycleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillingPeriod" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillingPeriodAlignment" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "billingPeriodAlignment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BillingTiming" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "billingTiming", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeModel" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "chargeModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeNumber" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "chargeNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargeType" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "chargeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChargedThroughDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "chargedThroughDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedById" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "createdById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DMRC" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "dmrc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DTCV" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "dtcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "discountAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DiscountLevel" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "discountLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DiscountPercentage" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "discountPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EffectiveEndDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "effectiveEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EffectiveStartDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "effectiveStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndDateCondition" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "endDateCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IncludedUnits" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "includedUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IsLastSegment" }),
        __metadata("design:type", Boolean)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "isLastSegment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListPriceBase" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "listPriceBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MRR" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "mrr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumberOfPeriods" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "numberOfPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OriginalId" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "originalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OverageCalculationOption" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "overageCalculationOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OveragePrice" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "overagePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OverageUnusedUnitsCreditOption" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "overageUnusedUnitsCreditOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PriceChangeOption" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "priceChangeOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PriceIncreasePercentage" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "priceIncreasePercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProcessedThroughDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "processedThroughDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ProductRatePlanChargeId" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "productRatePlanChargeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Quantity" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanId" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "ratePlanId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevRecCode" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "revRecCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevRecTriggerCondition" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "revRecTriggerCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RevenueRecognitionRuleName" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "revenueRecognitionRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RolloverBalance" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "rolloverBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Segment" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "segment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SpecificBillingPeriod" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "specificBillingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SpecificEndDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "specificEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TCV" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "tcv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TriggerDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "triggerDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TriggerEvent" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "triggerEvent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UOM" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "uom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UnusedUnitsCreditRates" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "unusedUnitsCreditRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpToPeriods" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "upToPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpToPeriodsType" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "upToPeriodsType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedById" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "updatedById", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "updatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UsageRecordRatingOption" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "usageRecordRatingOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseDiscountSpecificAccountingCode" }),
        __metadata("design:type", Boolean)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "useDiscountSpecificAccountingCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=WeeklyBillCycleDay" }),
        __metadata("design:type", String)
    ], RatePlanChargeDataInRatePlanDataRatePlanCharge.prototype, "weeklyBillCycleDay", void 0);
    return RatePlanChargeDataInRatePlanDataRatePlanCharge;
}(utils_1.SpeakeasyBase));
exports.RatePlanChargeDataInRatePlanDataRatePlanCharge = RatePlanChargeDataInRatePlanDataRatePlanCharge;
var RatePlanChargeDataInRatePlanData = /** @class */ (function (_super) {
    __extends(RatePlanChargeDataInRatePlanData, _super);
    function RatePlanChargeDataInRatePlanData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanCharge" }),
        __metadata("design:type", RatePlanChargeDataInRatePlanDataRatePlanCharge)
    ], RatePlanChargeDataInRatePlanData.prototype, "ratePlanCharge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RatePlanChargeTier", elemType: rateplanchargetier_1.RatePlanChargeTier }),
        __metadata("design:type", Array)
    ], RatePlanChargeDataInRatePlanData.prototype, "ratePlanChargeTier", void 0);
    return RatePlanChargeDataInRatePlanData;
}(utils_1.SpeakeasyBase));
exports.RatePlanChargeDataInRatePlanData = RatePlanChargeDataInRatePlanData;
