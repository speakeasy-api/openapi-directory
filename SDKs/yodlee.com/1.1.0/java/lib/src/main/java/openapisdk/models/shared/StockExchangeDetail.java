package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StockExchangeDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public StockExchangeDetail withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public StockExchangeDetail withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exchangeCode")
    public String exchangeCode;
    public StockExchangeDetail withExchangeCode(String exchangeCode) {
        this.exchangeCode = exchangeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symbol")
    public String symbol;
    public StockExchangeDetail withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
}