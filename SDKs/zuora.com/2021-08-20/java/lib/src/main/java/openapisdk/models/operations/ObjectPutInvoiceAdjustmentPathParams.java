package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutInvoiceAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectPutInvoiceAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}