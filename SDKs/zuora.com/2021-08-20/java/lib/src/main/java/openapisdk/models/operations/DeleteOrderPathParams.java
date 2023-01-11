package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public DeleteOrderPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
}