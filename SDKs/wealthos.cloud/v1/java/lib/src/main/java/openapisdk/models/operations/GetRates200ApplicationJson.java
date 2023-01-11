package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRates200ApplicationJson {
    @JsonProperty("rates")
    public Object[] rates;
    public GetRates200ApplicationJson withRates(Object[] rates) {
        this.rates = rates;
        return this;
    }
}