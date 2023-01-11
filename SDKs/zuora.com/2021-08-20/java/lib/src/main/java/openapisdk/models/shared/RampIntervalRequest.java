package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RampIntervalRequest
 * Container for the intervals that the ramp is split into in its timeline. Zuora can report metrics for this specific period.
 * 
**/
public class RampIntervalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RampIntervalRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("endDate")
    public LocalDate endDate;
    public RampIntervalRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RampIntervalRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("startDate")
    public LocalDate startDate;
    public RampIntervalRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}