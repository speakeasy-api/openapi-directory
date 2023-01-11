package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Workflow
 * A workflow.
 * 
**/
public class Workflow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calloutTrigger")
    public Boolean calloutTrigger;
    public Workflow withCalloutTrigger(Boolean calloutTrigger) {
        this.calloutTrigger = calloutTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public Workflow withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Workflow withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Workflow withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public String interval;
    public Workflow withInterval(String interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Workflow withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ondemandTrigger")
    public Boolean ondemandTrigger;
    public Workflow withOndemandTrigger(Boolean ondemandTrigger) {
        this.ondemandTrigger = ondemandTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledTrigger")
    public Boolean scheduledTrigger;
    public Workflow withScheduledTrigger(Boolean scheduledTrigger) {
        this.scheduledTrigger = scheduledTrigger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Workflow withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public WorkflowTypeEnum type;
    public Workflow withType(WorkflowTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public Workflow withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}