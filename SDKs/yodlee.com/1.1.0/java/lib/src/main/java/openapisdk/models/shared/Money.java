package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Money {
    @JsonProperty("amount")
    public Double amount;
    public Money withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public MoneyCurrencyEnum currency;
    public Money withCurrency(MoneyCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
}