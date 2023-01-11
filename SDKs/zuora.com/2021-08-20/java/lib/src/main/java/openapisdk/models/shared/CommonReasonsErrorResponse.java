package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommonReasonsErrorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public CommonReasonsErrorResponseReasons[] reasons;
    public CommonReasonsErrorResponse withReasons(CommonReasonsErrorResponseReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
}