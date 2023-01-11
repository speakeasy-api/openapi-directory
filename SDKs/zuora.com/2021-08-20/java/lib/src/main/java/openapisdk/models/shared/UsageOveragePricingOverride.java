package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageOveragePricingOverride
 * Pricing information about a usage charge that uses the "overage" charge model. In this charge model, the charge has an allowance of free units and a fixed price per additional unit consumed.
 * 
**/
public class UsageOveragePricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedUnits")
    public Double includedUnits;
    public UsageOveragePricingOverride withIncludedUnits(Double includedUnits) {
        this.includedUnits = includedUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfPeriods")
    public Long numberOfPeriods;
    public UsageOveragePricingOverride withNumberOfPeriods(Long numberOfPeriods) {
        this.numberOfPeriods = numberOfPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overagePrice")
    public Double overagePrice;
    public UsageOveragePricingOverride withOveragePrice(Double overagePrice) {
        this.overagePrice = overagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overageUnusedUnitsCreditOption")
    public UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum overageUnusedUnitsCreditOption;
    public UsageOveragePricingOverride withOverageUnusedUnitsCreditOption(UsageOveragePricingOverrideOverageUnusedUnitsCreditOptionEnum overageUnusedUnitsCreditOption) {
        this.overageUnusedUnitsCreditOption = overageUnusedUnitsCreditOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageOveragePricingOverridePriceChangeOptionEnum priceChangeOption;
    public UsageOveragePricingOverride withPriceChangeOption(UsageOveragePricingOverridePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageOveragePricingOverride withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unusedUnitsCreditRates")
    public Double unusedUnitsCreditRates;
    public UsageOveragePricingOverride withUnusedUnitsCreditRates(Double unusedUnitsCreditRates) {
        this.unusedUnitsCreditRates = unusedUnitsCreditRates;
        return this;
    }
}