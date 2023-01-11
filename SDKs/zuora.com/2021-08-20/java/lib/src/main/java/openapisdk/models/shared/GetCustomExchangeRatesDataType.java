package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomExchangeRatesDataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DATE")
    public GetCustomExchangeRatesDataTypeListOfExchangeRates date;
    public GetCustomExchangeRatesDataType withDate(GetCustomExchangeRatesDataTypeListOfExchangeRates date) {
        this.date = date;
        return this;
    }
}