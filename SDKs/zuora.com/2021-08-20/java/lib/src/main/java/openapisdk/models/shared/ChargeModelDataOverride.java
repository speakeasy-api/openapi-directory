package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeModelDataOverride
 * Container for charge model configuration data.
 * 
 * **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. The charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information.
 * 
**/
public class ChargeModelDataOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeModelConfiguration")
    public ChargeModelDataOverrideChargeModelConfiguration chargeModelConfiguration;
    public ChargeModelDataOverride withChargeModelConfiguration(ChargeModelDataOverrideChargeModelConfiguration chargeModelConfiguration) {
        this.chargeModelConfiguration = chargeModelConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public ChargeModelDataOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}