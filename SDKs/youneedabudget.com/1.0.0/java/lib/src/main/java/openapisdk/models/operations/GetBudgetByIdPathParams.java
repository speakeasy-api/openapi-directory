package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBudgetByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetBudgetByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}