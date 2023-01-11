package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateTask
 * A task.
 * 
**/
public class UpdateTask {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_type")
    public String actionType;
    public UpdateTask withActionType(String actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_type")
    public String callType;
    public UpdateTask withCallType(String callType) {
        this.callType = callType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrent_limit")
    public Long concurrentLimit;
    public UpdateTask withConcurrentLimit(Long concurrentLimit) {
        this.concurrentLimit = concurrentLimit;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public UpdateTask withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateTask withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public UpdateTask withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_id")
    public String objectId;
    public UpdateTask withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateTaskStatusEnum status;
    public UpdateTask withStatus(UpdateTaskStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public UpdateTask withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_id")
    public Long workflowId;
    public UpdateTask withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}