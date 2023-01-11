package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringVolumePricingOverride
 * Pricing information about a recurring charge that uses the "volume pricing" charge model. In this charge model, the charge has a variable price per unit, depending on how many units are purchased.
 * 
**/
public class RecurringVolumePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPriceBase")
    public RecurringVolumePricingOverrideListPriceBaseEnum listPriceBase;
    public RecurringVolumePricingOverride withListPriceBase(RecurringVolumePricingOverrideListPriceBaseEnum listPriceBase) {
        this.listPriceBase = listPriceBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringVolumePricingOverridePriceChangeOptionEnum priceChangeOption;
    public RecurringVolumePricingOverride withPriceChangeOption(RecurringVolumePricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringVolumePricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public RecurringVolumePricingOverride withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public RecurringVolumePricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}