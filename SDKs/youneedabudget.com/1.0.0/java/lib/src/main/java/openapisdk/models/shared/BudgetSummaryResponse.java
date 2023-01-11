package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetSummaryResponse {
    @JsonProperty("data")
    public BudgetSummaryResponseData data;
    public BudgetSummaryResponse withData(BudgetSummaryResponseData data) {
        this.data = data;
        return this;
    }
}