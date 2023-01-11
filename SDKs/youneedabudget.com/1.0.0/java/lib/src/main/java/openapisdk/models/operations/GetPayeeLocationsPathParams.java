package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeLocationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetPayeeLocationsPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}