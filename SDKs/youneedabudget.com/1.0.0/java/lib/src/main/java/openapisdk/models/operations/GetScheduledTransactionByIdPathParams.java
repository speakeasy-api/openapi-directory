package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScheduledTransactionByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetScheduledTransactionByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scheduled_transaction_id")
    public String scheduledTransactionId;
    public GetScheduledTransactionByIdPathParams withScheduledTransactionId(String scheduledTransactionId) {
        this.scheduledTransactionId = scheduledTransactionId;
        return this;
    }
}