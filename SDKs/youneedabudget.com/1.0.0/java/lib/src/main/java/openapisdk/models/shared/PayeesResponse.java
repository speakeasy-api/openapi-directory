package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeesResponse {
    @JsonProperty("data")
    public PayeesResponseData data;
    public PayeesResponse withData(PayeesResponseData data) {
        this.data = data;
        return this;
    }
}