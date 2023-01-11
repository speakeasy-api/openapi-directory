package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsByPayeePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetTransactionsByPayeePathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payee_id")
    public String payeeId;
    public GetTransactionsByPayeePathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}