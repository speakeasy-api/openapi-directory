package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public Long endTime;
    public TimeRange withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public Long startTime;
    public TimeRange withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
}