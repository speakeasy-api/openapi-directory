package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetTransactionsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}