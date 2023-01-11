package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCustomExchangeRatesType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inverse")
    public Boolean inverse;
    public GetCustomExchangeRatesType withInverse(Boolean inverse) {
        this.inverse = inverse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rates")
    public GetCustomExchangeRatesDataType[] rates;
    public GetCustomExchangeRatesType withRates(GetCustomExchangeRatesDataType[] rates) {
        this.rates = rates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetCustomExchangeRatesType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}