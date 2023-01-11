package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMonthCategoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public UpdateMonthCategoryPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public String categoryId;
    public UpdateMonthCategoryPathParams withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=month")
    public LocalDate month;
    public UpdateMonthCategoryPathParams withMonth(LocalDate month) {
        this.month = month;
        return this;
    }
}