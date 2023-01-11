package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrderTriggerDatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public PutOrderTriggerDatesPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
}