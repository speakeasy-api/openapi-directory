package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CashInResponse {
    @JsonProperty("success")
    public Boolean success;
    public CashInResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}