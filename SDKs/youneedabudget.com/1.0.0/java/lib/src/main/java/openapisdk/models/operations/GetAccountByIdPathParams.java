package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account_id")
    public String accountId;
    public GetAccountByIdPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetAccountByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}