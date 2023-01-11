package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsageTieredWithOveragePricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overagePrice")
    public Double overagePrice;
    public UsageTieredWithOveragePricingUpdate withOveragePrice(Double overagePrice) {
        this.overagePrice = overagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum priceChangeOption;
    public UsageTieredWithOveragePricingUpdate withPriceChangeOption(UsageTieredWithOveragePricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageTieredWithOveragePricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public UsageTieredWithOveragePricingUpdate withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
}