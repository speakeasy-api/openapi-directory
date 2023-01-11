package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OneTimeVolumePricingOverride
 * Pricing information about a one-time charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 * 
**/
public class OneTimeVolumePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OneTimeVolumePricingOverride withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public OneTimeVolumePricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}