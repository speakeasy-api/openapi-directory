package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetSettings {
    @JsonProperty("currency_format")
    public CurrencyFormat currencyFormat;
    public BudgetSettings withCurrencyFormat(CurrencyFormat currencyFormat) {
        this.currencyFormat = currencyFormat;
        return this;
    }
    @JsonProperty("date_format")
    public DateFormat dateFormat;
    public BudgetSettings withDateFormat(DateFormat dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
}