package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageTieredWithOveragePricingOverride
 * Pricing information about a usage charge that uses the "tiered with overage" charge model. In this charge model, the charge has cumulative pricing tiers that become effective as units are consumed. The charge also has a fixed price per unit consumed beyond the limit of the final tier.
 * 
**/
public class UsageTieredWithOveragePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPeriods")
    public Long numberOfPeriods;
    public UsageTieredWithOveragePricingOverride withNumberOfPeriods(Long numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overagePrice")
    public Double overagePrice;
    public UsageTieredWithOveragePricingOverride withOveragePrice(Double overagePrice) {
        this.overagePrice = overagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageUnusedUnitsCreditOption")
    public UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum overageUnusedUnitsCreditOption;
    public UsageTieredWithOveragePricingOverride withOverageUnusedUnitsCreditOption(UsageTieredWithOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum overageUnusedUnitsCreditOption) {
        this.overageUnusedUnitsCreditOption = overageUnusedUnitsCreditOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageTieredWithOveragePricingOverridePriceChangeOptionEnum priceChangeOption;
    public UsageTieredWithOveragePricingOverride withPriceChangeOption(UsageTieredWithOveragePricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageTieredWithOveragePricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public ChargeTier[] tiers;
    public UsageTieredWithOveragePricingOverride withTiers(ChargeTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unusedUnitsCreditRates")
    public Double unusedUnitsCreditRates;
    public UsageTieredWithOveragePricingOverride withUnusedUnitsCreditRates(Double unusedUnitsCreditRates) {
        this.unusedUnitsCreditRates = unusedUnitsCreditRates;
        return this;
    }
}