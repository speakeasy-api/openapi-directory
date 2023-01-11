package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeLocationResponse {
    @JsonProperty("data")
    public PayeeLocationResponseData data;
    public PayeeLocationResponse withData(PayeeLocationResponseData data) {
        this.data = data;
        return this;
    }
}