package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBudgetMonthsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetBudgetMonthsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}