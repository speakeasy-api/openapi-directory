package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecommendedRulesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_1")
    public MicroSecGroup group1;
    public RecommendedRulesRequest withGroup1(MicroSecGroup group1) {
        this.group1 = group1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_2")
    public MicroSecGroup group2;
    public RecommendedRulesRequest withGroup2(MicroSecGroup group2) {
        this.group2 = group2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_range")
    public TimeRange timeRange;
    public RecommendedRulesRequest withTimeRange(TimeRange timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}