package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringPerUnitPricingOverride
 * Pricing information about a recurring charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 * 
**/
public class RecurringPerUnitPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public RecurringPerUnitPricingOverride withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPriceBase")
    public RecurringPerUnitPricingOverrideListPriceBaseEnum listPriceBase;
    public RecurringPerUnitPricingOverride withListPriceBase(RecurringPerUnitPricingOverrideListPriceBaseEnum listPriceBase) {
        this.listPriceBase = listPriceBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringPerUnitPricingOverridePriceChangeOptionEnum priceChangeOption;
    public RecurringPerUnitPricingOverride withPriceChangeOption(RecurringPerUnitPricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringPerUnitPricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public RecurringPerUnitPricingOverride withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
}