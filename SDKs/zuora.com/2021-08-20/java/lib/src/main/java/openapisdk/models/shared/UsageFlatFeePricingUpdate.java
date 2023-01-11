package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsageFlatFeePricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public UsageFlatFeePricingUpdate withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageFlatFeePricingUpdatePriceChangeOptionEnum priceChangeOption;
    public UsageFlatFeePricingUpdate withPriceChangeOption(UsageFlatFeePricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageFlatFeePricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
}