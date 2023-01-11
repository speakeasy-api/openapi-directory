package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public ErrorResponseReasons[] reasons;
    public ErrorResponse withReasons(ErrorResponseReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
}