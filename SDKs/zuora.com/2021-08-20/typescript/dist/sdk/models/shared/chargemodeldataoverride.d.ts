import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare class ChargeModelDataOverrideChargeModelConfiguration extends SpeakeasyBase {
    customFieldPerUnitRate?: string;
    customFieldTotalAmount?: string;
    formula?: string;
}
/**
 * Container for charge model configuration data.
 *
 * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 *
**/
export declare class ChargeModelDataOverride extends SpeakeasyBase {
    chargeModelConfiguration?: ChargeModelDataOverrideChargeModelConfiguration;
    tiers?: ChargeTier[];
}
