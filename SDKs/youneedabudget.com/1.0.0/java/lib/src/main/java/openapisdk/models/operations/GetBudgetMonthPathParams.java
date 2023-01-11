package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetBudgetMonthPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetBudgetMonthPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=month")
    public LocalDate month;
    public GetBudgetMonthPathParams withMonth(LocalDate month) {
        this.month = month;
        return this;
    }
}