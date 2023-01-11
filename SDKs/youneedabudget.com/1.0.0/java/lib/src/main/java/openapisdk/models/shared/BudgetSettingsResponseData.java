package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetSettingsResponseData {
    @JsonProperty("settings")
    public BudgetSettings settings;
    public BudgetSettingsResponseData withSettings(BudgetSettings settings) {
        this.settings = settings;
        return this;
    }
}