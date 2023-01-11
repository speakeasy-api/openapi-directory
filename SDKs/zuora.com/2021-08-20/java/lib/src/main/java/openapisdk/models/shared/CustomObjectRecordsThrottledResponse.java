package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectRecordsThrottledResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Long code;
    public CustomObjectRecordsThrottledResponse withCode(Long code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public CustomObjectRecordsWithError[] details;
    public CustomObjectRecordsThrottledResponse withDetails(CustomObjectRecordsWithError[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CustomObjectRecordsThrottledResponse withMessage(String message) {
        this.message = message;
        return this;
    }
}