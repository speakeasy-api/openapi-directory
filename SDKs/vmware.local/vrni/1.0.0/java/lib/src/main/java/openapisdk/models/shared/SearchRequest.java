package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;
    public SearchRequest withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public AllEntityTypeEnum entityType;
    public SearchRequest withEntityType(AllEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public SearchRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Integer size;
    public SearchRequest withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_by")
    public SortByClause sortBy;
    public SearchRequest withSortBy(SortByClause sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_range")
    public TimeRange timeRange;
    public SearchRequest withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}