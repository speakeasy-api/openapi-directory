package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuTime")
    public String cpuTime;
    public GetWorkflowResponse withCpuTime(String cpuTime) {
        this.cpuTime = cpuTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public GetWorkflowResponse withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishedAt")
    public String finishedAt;
    public GetWorkflowResponse withFinishedAt(String finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetWorkflowResponse withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public java.util.Map<String, Object> messages;
    public GetWorkflowResponse withMessages(java.util.Map<String, Object> messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetWorkflowResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalWorkflowId")
    public String originalWorkflowId;
    public GetWorkflowResponse withOriginalWorkflowId(String originalWorkflowId) {
        this.originalWorkflowId = originalWorkflowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runTime")
    public Double runTime;
    public GetWorkflowResponse withRunTime(Double runTime) {
        this.runTime = runTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetWorkflowResponseStatusEnum status;
    public GetWorkflowResponse withStatus(GetWorkflowResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public GetWorkflowResponseTasks tasks;
    public GetWorkflowResponse withTasks(GetWorkflowResponseTasks tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public GetWorkflowResponse withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetWorkflowResponse withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}