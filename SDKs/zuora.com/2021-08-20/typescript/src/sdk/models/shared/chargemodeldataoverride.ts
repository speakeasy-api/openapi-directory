import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChargeTier } from "./chargetier";



export class ChargeModelDataOverrideChargeModelConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customFieldPerUnitRate" })
  customFieldPerUnitRate?: string;

  @SpeakeasyMetadata({ data: "json, name=customFieldTotalAmount" })
  customFieldTotalAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;
}


// ChargeModelDataOverride
/** 
 * Container for charge model configuration data.
 * 
 * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 * 
**/
export class ChargeModelDataOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeModelConfiguration" })
  chargeModelConfiguration?: ChargeModelDataOverrideChargeModelConfiguration;

  @SpeakeasyMetadata({ data: "json, name=tiers", elemType: ChargeTier })
  tiers?: ChargeTier[];
}
