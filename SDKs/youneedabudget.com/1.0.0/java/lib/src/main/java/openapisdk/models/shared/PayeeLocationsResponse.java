package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeLocationsResponse {
    @JsonProperty("data")
    public PayeeLocationsResponseData data;
    public PayeeLocationsResponse withData(PayeeLocationsResponseData data) {
        this.data = data;
        return this;
    }
}