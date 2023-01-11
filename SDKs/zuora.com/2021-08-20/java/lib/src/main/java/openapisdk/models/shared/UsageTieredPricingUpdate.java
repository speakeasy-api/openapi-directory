package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsageTieredPricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageTieredPricingUpdatePriceChangeOptionEnum priceChangeOption;
    public UsageTieredPricingUpdate withPriceChangeOption(UsageTieredPricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageTieredPricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public UsageTieredPricingUpdate withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}