package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayeeLocationByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=budget_id")
    public String budgetId;
    public GetPayeeLocationByIdPathParams withBudgetId(String budgetId) {
        this.budgetId = budgetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payee_location_id")
    public String payeeLocationId;
    public GetPayeeLocationByIdPathParams withPayeeLocationId(String payeeLocationId) {
        this.payeeLocationId = payeeLocationId;
        return this;
    }
}