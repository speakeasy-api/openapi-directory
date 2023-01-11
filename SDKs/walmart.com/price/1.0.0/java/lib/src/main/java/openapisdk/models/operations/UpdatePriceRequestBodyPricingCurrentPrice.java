package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePriceRequestBodyPricingCurrentPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public UpdatePriceRequestBodyPricingCurrentPrice withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum currency;
    public UpdatePriceRequestBodyPricingCurrentPrice withCurrency(UpdatePriceRequestBodyPricingCurrentPriceCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}