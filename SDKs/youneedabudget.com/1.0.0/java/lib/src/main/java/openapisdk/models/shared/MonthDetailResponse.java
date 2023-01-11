package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MonthDetailResponse {
    @JsonProperty("data")
    public MonthDetailResponseData data;
    public MonthDetailResponse withData(MonthDetailResponseData data) {
        this.data = data;
        return this;
    }
}