package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePriceRequestBodyPricingComparisonPrice
 * This is applicable only for promotions
**/
public class UpdatePriceRequestBodyPricingComparisonPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public UpdatePriceRequestBodyPricingComparisonPrice withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum currency;
    public UpdatePriceRequestBodyPricingComparisonPrice withCurrency(UpdatePriceRequestBodyPricingComparisonPriceCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}