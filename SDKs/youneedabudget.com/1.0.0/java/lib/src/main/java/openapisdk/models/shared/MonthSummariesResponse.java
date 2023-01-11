package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MonthSummariesResponse {
    @JsonProperty("data")
    public MonthSummariesResponseData data;
    public MonthSummariesResponse withData(MonthSummariesResponseData data) {
        this.data = data;
        return this;
    }
}