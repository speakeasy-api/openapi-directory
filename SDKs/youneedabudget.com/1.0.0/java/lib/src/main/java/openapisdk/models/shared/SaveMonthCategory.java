package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveMonthCategory {
    @JsonProperty("budgeted")
    public Long budgeted;
    public SaveMonthCategory withBudgeted(Long budgeted) {
        this.budgeted = budgeted;
        return this;
    }
}