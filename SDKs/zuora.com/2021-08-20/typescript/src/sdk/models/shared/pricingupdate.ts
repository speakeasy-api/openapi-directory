import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeModelDataOverride } from "./chargemodeldataoverride";
import { DiscountPricingUpdate } from "./discountpricingupdate";
import { RecurringFlatFeePricingUpdate } from "./recurringflatfeepricingupdate";
import { RecurringPerUnitPricingUpdate } from "./recurringperunitpricingupdate";
import { RecurringTieredPricingUpdate } from "./recurringtieredpricingupdate";
import { RecurringVolumePricingUpdate } from "./recurringvolumepricingupdate";
import { UsageFlatFeePricingUpdate } from "./usageflatfeepricingupdate";
import { UsageOveragePricingUpdate } from "./usageoveragepricingupdate";
import { UsagePerUnitPricingUpdate } from "./usageperunitpricingupdate";
import { UsageTieredPricingUpdate } from "./usagetieredpricingupdate";
import { UsageTieredWithOveragePricingUpdate } from "./usagetieredwithoveragepricingupdate";
import { UsageVolumePricingUpdate } from "./usagevolumepricingupdate";



export class PricingUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeModelData" })
  chargeModelData?: ChargeModelDataOverride;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: DiscountPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=recurringFlatFee" })
  recurringFlatFee?: RecurringFlatFeePricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=recurringPerUnit" })
  recurringPerUnit?: RecurringPerUnitPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=recurringTiered" })
  recurringTiered?: RecurringTieredPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=recurringVolume" })
  recurringVolume?: RecurringVolumePricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usageFlatFee" })
  usageFlatFee?: UsageFlatFeePricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usageOverage" })
  usageOverage?: UsageOveragePricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usagePerUnit" })
  usagePerUnit?: UsagePerUnitPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usageTiered" })
  usageTiered?: UsageTieredPricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usageTieredWithOverage" })
  usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate;

  @SpeakeasyMetadata({ data: "json, name=usageVolume" })
  usageVolume?: UsageVolumePricingUpdate;
}
