package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceItemAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetInvoiceItemAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}