package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DiscountPricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyDiscountTo")
    public DiscountPricingUpdateApplyDiscountToEnum applyDiscountTo;
    public DiscountPricingUpdate withApplyDiscountTo(DiscountPricingUpdateApplyDiscountToEnum applyDiscountTo) {
        this.applyDiscountTo = applyDiscountTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountLevel")
    public DiscountPricingUpdateDiscountLevelEnum discountLevel;
    public DiscountPricingUpdate withDiscountLevel(DiscountPricingUpdateDiscountLevelEnum discountLevel) {
        this.discountLevel = discountLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountPercentage")
    public Double discountPercentage;
    public DiscountPricingUpdate withDiscountPercentage(Double discountPercentage) {
        this.discountPercentage = discountPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public DiscountPricingUpdatePriceChangeOptionEnum priceChangeOption;
    public DiscountPricingUpdate withPriceChangeOption(DiscountPricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
}