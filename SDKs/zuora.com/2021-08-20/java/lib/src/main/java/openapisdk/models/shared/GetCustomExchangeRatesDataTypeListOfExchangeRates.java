package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCustomExchangeRatesDataTypeListOfExchangeRates
 * Container for exchange rate information on a given date. The field name is the date in `yyyy-mm-dd` format, for example, 2016-01-15.
 * 
**/
public class GetCustomExchangeRatesDataTypeListOfExchangeRates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CURRENCY")
    public String currency;
    public GetCustomExchangeRatesDataTypeListOfExchangeRates withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerExchangeRateDate")
    public LocalDate providerExchangeRateDate;
    public GetCustomExchangeRatesDataTypeListOfExchangeRates withProviderExchangeRateDate(LocalDate providerExchangeRateDate) {
        this.providerExchangeRateDate = providerExchangeRateDate;
        return this;
    }
}