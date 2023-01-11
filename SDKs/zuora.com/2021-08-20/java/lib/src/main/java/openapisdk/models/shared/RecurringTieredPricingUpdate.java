package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecurringTieredPricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public RecurringTieredPricingUpdatePriceChangeOptionEnum priceChangeOption;
    public RecurringTieredPricingUpdate withPriceChangeOption(RecurringTieredPricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public RecurringTieredPricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public RecurringTieredPricingUpdate withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public RecurringTieredPricingUpdate withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}