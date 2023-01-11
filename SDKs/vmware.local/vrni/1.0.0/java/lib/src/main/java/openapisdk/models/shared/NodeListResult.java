package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public NodeId[] results;
    public NodeListResult withResults(NodeId[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Long totalCount;
    public NodeListResult withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}