package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetTransactionByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transaction_id")
    public String transactionId;
    public GetTransactionByIdPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}