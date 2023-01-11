package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetCategoriesPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}