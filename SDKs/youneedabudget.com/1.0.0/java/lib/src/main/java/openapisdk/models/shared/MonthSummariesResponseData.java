package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MonthSummariesResponseData {
    @JsonProperty("months")
    public MonthSummary[] months;
    public MonthSummariesResponseData withMonths(MonthSummary[] months) {
        this.months = months;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public MonthSummariesResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}