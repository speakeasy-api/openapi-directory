package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetWorkflowResponseTasks
 * An object containing task counts.
 * 
**/
public class GetWorkflowResponseTasks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Long error;
    public GetWorkflowResponseTasks withError(Long error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Long pending;
    public GetWorkflowResponseTasks withPending(Long pending) {
        this.pending = pending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing")
    public Long processing;
    public GetWorkflowResponseTasks withProcessing(Long processing) {
        this.processing = processing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queued")
    public Long queued;
    public GetWorkflowResponseTasks withQueued(Long queued) {
        this.queued = queued;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopped")
    public Long stopped;
    public GetWorkflowResponseTasks withStopped(Long stopped) {
        this.stopped = stopped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Long success;
    public GetWorkflowResponseTasks withSuccess(Long success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetWorkflowResponseTasks withTotal(Long total) {
        this.total = total;
        return this;
    }
}