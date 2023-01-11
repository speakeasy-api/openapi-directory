package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PagedListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;
    public PagedListResponse withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public Long endTime;
    public PagedListResponse withEndTime(Long endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public EntityId[] results;
    public PagedListResponse withResults(EntityId[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public Long startTime;
    public PagedListResponse withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Long totalCount;
    public PagedListResponse withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}