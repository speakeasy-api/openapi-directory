package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateOrderCustomFieldsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderNumber")
    public String orderNumber;
    public PutUpdateOrderCustomFieldsPathParams withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
}