package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetPayeesPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}