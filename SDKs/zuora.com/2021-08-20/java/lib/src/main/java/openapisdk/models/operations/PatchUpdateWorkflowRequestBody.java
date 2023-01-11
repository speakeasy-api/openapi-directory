package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchUpdateWorkflowRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_trigger")
    public Boolean calloutTrigger;
    public PatchUpdateWorkflowRequestBody withCalloutTrigger(Boolean calloutTrigger) {
        this.calloutTrigger = calloutTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PatchUpdateWorkflowRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public String interval;
    public PatchUpdateWorkflowRequestBody withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatchUpdateWorkflowRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ondemand_trigger")
    public Boolean ondemandTrigger;
    public PatchUpdateWorkflowRequestBody withOndemandTrigger(Boolean ondemandTrigger) {
        this.ondemandTrigger = ondemandTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public PatchUpdateWorkflowRequestBody withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduled_trigger")
    public Boolean scheduledTrigger;
    public PatchUpdateWorkflowRequestBody withScheduledTrigger(Boolean scheduledTrigger) {
        this.scheduledTrigger = scheduledTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public PatchUpdateWorkflowRequestBody withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public PatchUpdateWorkflowRequestBody withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}