package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Task
 * A task.
 * 
**/
public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action_type")
    public TaskActionTypeEnum actionType;
    public Task withActionType(TaskActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_type")
    public String callType;
    public Task withCallType(String callType) {
        this.callType = callType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concurrent_limit")
    public Long concurrentLimit;
    public Task withConcurrentLimit(Long concurrentLimit) {
        this.concurrentLimit = concurrentLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public java.util.Map<String, Object> data;
    public Task withData(java.util.Map<String, Object> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public Task withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public Task withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_class")
    public String errorClass;
    public Task withErrorClass(String errorClass) {
        this.errorClass = errorClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_details")
    public String errorDetails;
    public Task withErrorDetails(String errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Task withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public Boolean instance;
    public Task withInstance(Boolean instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Task withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public Task withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_id")
    public String objectId;
    public Task withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_task_id")
    public Long originalTaskId;
    public Task withOriginalTaskId(Long originalTaskId) {
        this.originalTaskId = originalTaskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_workflow_id")
    public Long originalWorkflowId;
    public Task withOriginalWorkflowId(Long originalWorkflowId) {
        this.originalWorkflowId = originalWorkflowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public Task withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public Task withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TaskStatusEnum status;
    public Task withStatus(TaskStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Task withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_id")
    public Long taskId;
    public Task withTaskId(Long taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_id")
    public Long workflowId;
    public Task withWorkflowId(Long workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}