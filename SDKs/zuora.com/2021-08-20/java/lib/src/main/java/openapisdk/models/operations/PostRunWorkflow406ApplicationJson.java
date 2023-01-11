package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostRunWorkflow406ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public openapisdk.models.shared.WorkflowError[] errors;
    public PostRunWorkflow406ApplicationJson withErrors(openapisdk.models.shared.WorkflowError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public Object parameters;
    public PostRunWorkflow406ApplicationJson withParameters(Object parameters) {
        this.parameters = parameters;
        return this;
    }
}