import { SpeakeasyBase } from "../../../internal/utils";
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
export declare class PreviewOrderPricingUpdate extends SpeakeasyBase {
    chargeModelData?: ChargeModelDataOverride;
    discount?: DiscountPricingUpdate;
    recurringFlatFee?: RecurringFlatFeePricingUpdate;
    recurringPerUnit?: RecurringPerUnitPricingUpdate;
    recurringTiered?: RecurringTieredPricingUpdate;
    recurringVolume?: RecurringVolumePricingUpdate;
    usageFlatFee?: UsageFlatFeePricingUpdate;
    usageOverage?: UsageOveragePricingUpdate;
    usagePerUnit?: UsagePerUnitPricingUpdate;
    usageTiered?: UsageTieredPricingUpdate;
    usageTieredWithOverage?: UsageTieredWithOveragePricingUpdate;
    usageVolume?: UsageVolumePricingUpdate;
}
