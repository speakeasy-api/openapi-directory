import { SpeakeasyBase } from "../../../internal/utils";
import { ProxyCreateOrModifyProductRatePlanChargeChargeModelConfigurationItem } from "./proxycreateormodifyproductrateplanchargechargemodelconfigurationitem";
/**
 * Container for charge model configuration data.
 *
 * @remarks
 *
 * **Notes**:
 *
 * * This field is only available if you have the Pre-Rated Pricing or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 * * To use this field, you must set the `X-Zuora-WSDL-Version` request header to `102` or later. Otherwise, an error occurs with "Code: INVALID_VALUE".
 *
 */
export declare class ProxyCreateOrModifyProductRatePlanChargeChargeModelConfiguration extends SpeakeasyBase {
    /**
     * An array of Charge Model Configuration Key-Value pairs.
     *
     * @remarks
     *
     */
    configurationItem?: ProxyCreateOrModifyProductRatePlanChargeChargeModelConfigurationItem[];
}
