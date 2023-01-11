package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkflowError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public String[] errors;
    public DeleteWorkflowError withErrors(String[] errors) {
        this.errors = errors;
        return this;
    }
}