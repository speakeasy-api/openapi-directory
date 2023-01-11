package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecurringTieredPricingOverride
 * Pricing information about a recurring charge that uses the "tiered pricing" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are purchased.
 * 
**/
public class RecurringTieredPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPriceBase")
    public RecurringTieredPricingOverrideListPriceBaseEnum listPriceBase;
    public RecurringTieredPricingOverride withListPriceBase(RecurringTieredPricingOverrideListPriceBaseEnum listPriceBase) {
        this.listPriceBase = listPriceBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringTieredPricingOverridePriceChangeOptionEnum priceChangeOption;
    public RecurringTieredPricingOverride withPriceChangeOption(RecurringTieredPricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringTieredPricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public RecurringTieredPricingOverride withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public RecurringTieredPricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}