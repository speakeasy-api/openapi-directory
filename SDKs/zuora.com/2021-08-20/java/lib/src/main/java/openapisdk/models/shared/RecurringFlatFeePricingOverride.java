package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringFlatFeePricingOverride
 * Pricing information about a recurring charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 * 
**/
public class RecurringFlatFeePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public RecurringFlatFeePricingOverride withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPriceBase")
    public RecurringFlatFeePricingOverrideListPriceBaseEnum listPriceBase;
    public RecurringFlatFeePricingOverride withListPriceBase(RecurringFlatFeePricingOverrideListPriceBaseEnum listPriceBase) {
        this.listPriceBase = listPriceBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringFlatFeePricingOverridePriceChangeOptionEnum priceChangeOption;
    public RecurringFlatFeePricingOverride withPriceChangeOption(RecurringFlatFeePricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringFlatFeePricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
}