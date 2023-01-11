package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsByCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetTransactionsByCategoryPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public String categoryId;
    public GetTransactionsByCategoryPathParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
}