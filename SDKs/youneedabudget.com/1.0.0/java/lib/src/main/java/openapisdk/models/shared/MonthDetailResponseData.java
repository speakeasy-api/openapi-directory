package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MonthDetailResponseData {
    @JsonProperty("month")
    public MonthDetail month;
    public MonthDetailResponseData withMonth(MonthDetail month) {
        this.month = month;
        return this;
    }
}