package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecommendedRules {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public RecommendedRule[] results;
    public RecommendedRules withResults(RecommendedRule[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_range")
    public TimeRange timeRange;
    public RecommendedRules withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}