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
    /**
     * Container for charge model configuration data.
     *
     * @remarks
     *
     * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
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
