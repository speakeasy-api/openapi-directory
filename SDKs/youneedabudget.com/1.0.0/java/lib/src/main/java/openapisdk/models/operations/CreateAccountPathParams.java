package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public CreateAccountPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
}