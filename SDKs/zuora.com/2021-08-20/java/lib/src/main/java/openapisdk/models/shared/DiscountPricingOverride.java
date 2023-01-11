package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscountPricingOverride
 * Pricing information about a discount charge.
 * 
**/
public class DiscountPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyDiscountTo")
    public DiscountPricingOverrideApplyDiscountToEnum applyDiscountTo;
    public DiscountPricingOverride withApplyDiscountTo(DiscountPricingOverrideApplyDiscountToEnum applyDiscountTo) {
        this.applyDiscountTo = applyDiscountTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountAmount")
    public Double discountAmount;
    public DiscountPricingOverride withDiscountAmount(Double discountAmount) {
        this.discountAmount = discountAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountLevel")
    public DiscountPricingOverrideDiscountLevelEnum discountLevel;
    public DiscountPricingOverride withDiscountLevel(DiscountPricingOverrideDiscountLevelEnum discountLevel) {
        this.discountLevel = discountLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountPercentage")
    public Double discountPercentage;
    public DiscountPricingOverride withDiscountPercentage(Double discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public DiscountPricingOverridePriceChangeOptionEnum priceChangeOption;
    public DiscountPricingOverride withPriceChangeOption(DiscountPricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
}