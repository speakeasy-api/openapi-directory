package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetSettingsResponse {
    @JsonProperty("data")
    public BudgetSettingsResponseData data;
    public BudgetSettingsResponse withData(BudgetSettingsResponseData data) {
        this.data = data;
        return this;
    }
}