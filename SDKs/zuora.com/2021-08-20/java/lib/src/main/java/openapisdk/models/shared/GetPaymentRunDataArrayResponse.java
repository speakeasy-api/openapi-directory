package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPaymentRunDataArrayResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public GetPaymentRunDataElementResponse[] data;
    public GetPaymentRunDataArrayResponse withData(GetPaymentRunDataElementResponse[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetPaymentRunDataArrayResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}