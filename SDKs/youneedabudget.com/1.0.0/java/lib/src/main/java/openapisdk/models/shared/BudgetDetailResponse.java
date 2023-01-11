package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetDetailResponse {
    @JsonProperty("data")
    public BudgetDetailResponseData data;
    public BudgetDetailResponse withData(BudgetDetailResponseData data) {
        this.data = data;
        return this;
    }
}