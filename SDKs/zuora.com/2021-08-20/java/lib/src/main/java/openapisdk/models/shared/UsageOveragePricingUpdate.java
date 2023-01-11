package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsageOveragePricingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedUnits")
    public Double includedUnits;
    public UsageOveragePricingUpdate withIncludedUnits(Double includedUnits) {
        this.includedUnits = includedUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overagePrice")
    public Double overagePrice;
    public UsageOveragePricingUpdate withOveragePrice(Double overagePrice) {
        this.overagePrice = overagePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeOption")
    public UsageOveragePricingUpdatePriceChangeOptionEnum priceChangeOption;
    public UsageOveragePricingUpdate withPriceChangeOption(UsageOveragePricingUpdatePriceChangeOptionEnum priceChangeOption) {
        this.priceChangeOption = priceChangeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceIncreasePercentage")
    public Double priceIncreasePercentage;
    public UsageOveragePricingUpdate withPriceIncreasePercentage(Double priceIncreasePercentage) {
        this.priceIncreasePercentage = priceIncreasePercentage;
        return this;
    }
}