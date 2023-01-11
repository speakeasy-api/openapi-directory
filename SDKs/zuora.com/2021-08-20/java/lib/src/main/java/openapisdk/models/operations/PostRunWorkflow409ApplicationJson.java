package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostRunWorkflow409ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public openapisdk.models.shared.WorkflowError[] errors;
    public PostRunWorkflow409ApplicationJson withErrors(openapisdk.models.shared.WorkflowError[] errors) {
        this.errors = errors;
        return this;
    }
}