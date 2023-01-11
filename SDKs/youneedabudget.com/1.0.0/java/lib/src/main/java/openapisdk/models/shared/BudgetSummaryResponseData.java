package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BudgetSummaryResponseData {
    @JsonProperty("budgets")
    public BudgetSummary[] budgets;
    public BudgetSummaryResponseData withBudgets(BudgetSummary[] budgets) {
        this.budgets = budgets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_budget")
    public BudgetSummary defaultBudget;
    public BudgetSummaryResponseData withDefaultBudget(BudgetSummary defaultBudget) {
        this.defaultBudget = defaultBudget;
        return this;
    }
}