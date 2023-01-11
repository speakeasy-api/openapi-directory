package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataSourceListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public DataSourceEntityId[] results;
    public DataSourceListResponse withResults(DataSourceEntityId[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Long totalCount;
    public DataSourceListResponse withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}