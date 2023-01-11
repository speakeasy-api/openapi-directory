package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BudgetDetailResponseData {
    @JsonProperty("budget")
    public BudgetDetail budget;
    public BudgetDetailResponseData withBudget(BudgetDetail budget) {
        this.budget = budget;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public BudgetDetailResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}