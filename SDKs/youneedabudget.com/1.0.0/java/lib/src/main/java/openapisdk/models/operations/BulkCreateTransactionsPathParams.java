package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public BulkCreateTransactionsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}