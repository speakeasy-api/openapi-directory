package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExecuteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ActionsErrorResponse[] errors;
    public ExecuteResult withErrors(ActionsErrorResponse[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ExecuteResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Success")
    public Boolean success;
    public ExecuteResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}