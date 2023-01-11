package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public UpdateTransactionsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}