package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecurringFlatFeePricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public RecurringFlatFeePricingUpdate withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringFlatFeePricingUpdatePriceChangeOptionEnum priceChangeOption;
    public RecurringFlatFeePricingUpdate withPriceChangeOption(RecurringFlatFeePricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringFlatFeePricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
}