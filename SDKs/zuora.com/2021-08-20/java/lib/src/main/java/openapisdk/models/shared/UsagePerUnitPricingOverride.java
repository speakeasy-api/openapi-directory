package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsagePerUnitPricingOverride
 * Pricing information about a usage charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit consumed.
 * 
**/
public class UsagePerUnitPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public UsagePerUnitPricingOverride withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsagePerUnitPricingOverridePriceChangeOptionEnum priceChangeOption;
    public UsagePerUnitPricingOverride withPriceChangeOption(UsagePerUnitPricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsagePerUnitPricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingGroup")
    public UsagePerUnitPricingOverrideRatingGroupEnum ratingGroup;
    public UsagePerUnitPricingOverride withRatingGroup(UsagePerUnitPricingOverrideRatingGroupEnum ratingGroup) {
        this.ratingGroup = ratingGroup;
        return this;
    }
}