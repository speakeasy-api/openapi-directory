package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetAccountsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}