package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RampRequest
 * Container of the ramp definitions. It is used to create, update, or remove the ramp definition for the new subscription.
 * 
**/
public class RampRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charges")
    public RampChargeRequest[] charges;
    public RampRequest withCharges(RampChargeRequest[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public Boolean delete;
    public RampRequest withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RampRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intervals")
    public RampIntervalRequest[] intervals;
    public RampRequest withIntervals(RampIntervalRequest[] intervals) {
        this.intervals = intervals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RampRequest withName(String name) {
        this.name = name;
        return this;
    }
}