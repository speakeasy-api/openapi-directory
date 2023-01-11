package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ActionsErrorResponse[] errors;
    public DeleteResult withErrors(ActionsErrorResponse[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeleteResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public DeleteResult withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}