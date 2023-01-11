package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidationErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasons")
    public ValidationReasons[] reasons;
    public ValidationErrors withReasons(ValidationReasons[] reasons) {
        this.reasons = reasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ValidationErrors withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}