package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayeeResponse {
    @JsonProperty("data")
    public PayeeResponseData data;
    public PayeeResponse withData(PayeeResponseData data) {
        this.data = data;
        return this;
    }
}