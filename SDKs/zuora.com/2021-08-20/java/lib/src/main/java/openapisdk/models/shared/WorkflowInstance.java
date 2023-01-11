package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowInstance
 * A instance workflow object.
**/
public class WorkflowInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public WorkflowInstance withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public WorkflowInstance withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkflowInstance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalWorkflowId")
    public Long originalWorkflowId;
    public WorkflowInstance withOriginalWorkflowId(Long originalWorkflowId) {
        this.originalWorkflowId = originalWorkflowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WorkflowInstanceStatusEnum status;
    public WorkflowInstance withStatus(WorkflowInstanceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public WorkflowInstance withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}