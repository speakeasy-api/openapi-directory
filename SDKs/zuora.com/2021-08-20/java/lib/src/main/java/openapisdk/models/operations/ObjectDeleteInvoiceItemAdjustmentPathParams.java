package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectDeleteInvoiceItemAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectDeleteInvoiceItemAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}