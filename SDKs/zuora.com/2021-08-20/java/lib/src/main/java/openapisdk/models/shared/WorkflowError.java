package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkflowError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public WorkflowErrorCodeEnum code;
    public WorkflowError withCode(WorkflowErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public WorkflowError withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public WorkflowError withTitle(String title) {
        this.title = title;
        return this;
    }
}