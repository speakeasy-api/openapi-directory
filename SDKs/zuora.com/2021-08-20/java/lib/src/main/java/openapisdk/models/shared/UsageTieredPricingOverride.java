package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageTieredPricingOverride
 * Pricing information about a usage charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed.
 * 
**/
public class UsageTieredPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageTieredPricingOverridePriceChangeOptionEnum priceChangeOption;
    public UsageTieredPricingOverride withPriceChangeOption(UsageTieredPricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageTieredPricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingGroup")
    public UsageTieredPricingOverrideRatingGroupEnum ratingGroup;
    public UsageTieredPricingOverride withRatingGroup(UsageTieredPricingOverrideRatingGroupEnum ratingGroup) {
        this.ratingGroup = ratingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public UsageTieredPricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}