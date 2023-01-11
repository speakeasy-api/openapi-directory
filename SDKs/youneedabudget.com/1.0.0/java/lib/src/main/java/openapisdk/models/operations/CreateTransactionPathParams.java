package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public CreateTransactionPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}