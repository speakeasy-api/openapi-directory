package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportTransactionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public ImportTransactionsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}