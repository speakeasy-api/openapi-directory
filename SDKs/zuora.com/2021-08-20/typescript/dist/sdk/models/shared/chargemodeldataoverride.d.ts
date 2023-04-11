import { SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";
export declare class ChargeModelDataOverrideChargeModelConfiguration extends SpeakeasyBase {
    /**
     * The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.
     *
     * @remarks
     *
     * This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    customFieldPerUnitRate?: string;
    /**
     * The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`.
     *
     * @remarks
     *
     * This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    customFieldTotalAmount?: string;
    /**
     * The pricing formula to calculate actual rating amount for each usage record.
     *
     * @remarks
     *
     * This field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    formula?: string;
}
/**
 * Container for charge model configuration data.
 *
 * @remarks
 *
 * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 *
 */
export declare class ChargeModelDataOverride extends SpeakeasyBase {
    chargeModelConfiguration?: ChargeModelDataOverrideChargeModelConfiguration;
    /**
     * List of cumulative pricing tiers in the charge.
     *
     * @remarks
     *
     * **Note**: When you override tiers of the charge with a High Water Mark Pricing charge model, you have to provide all of the tiers, including the ones you do not want to change. The new tiers will completely override the previous ones. The High Water Mark Pricing charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
     *
     */
    tiers?: ChargeTier[];
}
