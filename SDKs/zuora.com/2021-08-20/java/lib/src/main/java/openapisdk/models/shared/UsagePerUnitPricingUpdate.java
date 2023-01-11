package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsagePerUnitPricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public UsagePerUnitPricingUpdate withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsagePerUnitPricingUpdatePriceChangeOptionEnum priceChangeOption;
    public UsagePerUnitPricingUpdate withPriceChangeOption(UsagePerUnitPricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsagePerUnitPricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
}