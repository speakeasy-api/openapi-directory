package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public GetOrderPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
}