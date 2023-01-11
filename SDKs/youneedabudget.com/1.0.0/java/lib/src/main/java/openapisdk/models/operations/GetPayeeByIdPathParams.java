package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetPayeeByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payee_id")
    public String payeeId;
    public GetPayeeByIdPathParams withPayeeId(String payeeId) {
        this.payeeId = payeeId;
        return this;
    }
}