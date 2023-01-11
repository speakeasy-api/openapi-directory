package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageVolumePricingOverride
 * Pricing information about a usage charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are consumed.
 * 
**/
public class UsageVolumePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageVolumePricingOverridePriceChangeOptionEnum priceChangeOption;
    public UsageVolumePricingOverride withPriceChangeOption(UsageVolumePricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageVolumePricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingGroup")
    public UsageVolumePricingOverrideRatingGroupEnum ratingGroup;
    public UsageVolumePricingOverride withRatingGroup(UsageVolumePricingOverrideRatingGroupEnum ratingGroup) {
        this.ratingGroup = ratingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public UsageVolumePricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}