import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatePlanChargeTier } from "./rateplanchargetier";



export class RatePlanChargeDataInRatePlanDataRatePlanCharge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountingCode" })
  accountingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplyDiscountTo" })
  applyDiscountTo?: string;

  @SpeakeasyMetadata({ data: "json, name=BillCycleDay" })
  billCycleDay?: number;

  @SpeakeasyMetadata({ data: "json, name=BillCycleType" })
  billCycleType?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingPeriod" })
  billingPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingPeriodAlignment" })
  billingPeriodAlignment?: string;

  @SpeakeasyMetadata({ data: "json, name=BillingTiming" })
  billingTiming?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeModel" })
  chargeModel?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeNumber" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargeType" })
  chargeType?: string;

  @SpeakeasyMetadata({ data: "json, name=ChargedThroughDate" })
  chargedThroughDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DMRC" })
  dmrc?: number;

  @SpeakeasyMetadata({ data: "json, name=DTCV" })
  dtcv?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DiscountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=DiscountLevel" })
  discountLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=DiscountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=EffectiveEndDate" })
  effectiveEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EffectiveStartDate" })
  effectiveStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndDateCondition" })
  endDateCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=IncludedUnits" })
  includedUnits?: number;

  @SpeakeasyMetadata({ data: "json, name=IsLastSegment" })
  isLastSegment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ListPriceBase" })
  listPriceBase?: string;

  @SpeakeasyMetadata({ data: "json, name=MRR" })
  mrr?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=OriginalId" })
  originalId?: string;

  @SpeakeasyMetadata({ data: "json, name=OverageCalculationOption" })
  overageCalculationOption?: string;

  @SpeakeasyMetadata({ data: "json, name=OveragePrice" })
  overagePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=OverageUnusedUnitsCreditOption" })
  overageUnusedUnitsCreditOption?: string;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=PriceChangeOption" })
  priceChangeOption?: string;

  @SpeakeasyMetadata({ data: "json, name=PriceIncreasePercentage" })
  priceIncreasePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=ProcessedThroughDate" })
  processedThroughDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProductRatePlanChargeId" })
  productRatePlanChargeId: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=RatePlanId" })
  ratePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=RevRecCode" })
  revRecCode?: string;

  @SpeakeasyMetadata({ data: "json, name=RevRecTriggerCondition" })
  revRecTriggerCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=RevenueRecognitionRuleName" })
  revenueRecognitionRuleName?: string;

  @SpeakeasyMetadata({ data: "json, name=RolloverBalance" })
  rolloverBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=Segment" })
  segment?: number;

  @SpeakeasyMetadata({ data: "json, name=SpecificBillingPeriod" })
  specificBillingPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=SpecificEndDate" })
  specificEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TCV" })
  tcv?: number;

  @SpeakeasyMetadata({ data: "json, name=TriggerDate" })
  triggerDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TriggerEvent" })
  triggerEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=UOM" })
  uom?: string;

  @SpeakeasyMetadata({ data: "json, name=UnusedUnitsCreditRates" })
  unusedUnitsCreditRates?: number;

  @SpeakeasyMetadata({ data: "json, name=UpToPeriods" })
  upToPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=UpToPeriodsType" })
  upToPeriodsType?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDate" })
  updatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=UsageRecordRatingOption" })
  usageRecordRatingOption?: string;

  @SpeakeasyMetadata({ data: "json, name=UseDiscountSpecificAccountingCode" })
  useDiscountSpecificAccountingCode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;

  @SpeakeasyMetadata({ data: "json, name=WeeklyBillCycleDay" })
  weeklyBillCycleDay?: string;
}


export class RatePlanChargeDataInRatePlanData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RatePlanCharge" })
  ratePlanCharge: RatePlanChargeDataInRatePlanDataRatePlanCharge;

  @SpeakeasyMetadata({ data: "json, name=RatePlanChargeTier", elemType: RatePlanChargeTier })
  ratePlanChargeTier?: RatePlanChargeTier[];
}
