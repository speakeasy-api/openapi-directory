package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public UpdateTransactionPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transaction_id")
    public String transactionId;
    public UpdateTransactionPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}