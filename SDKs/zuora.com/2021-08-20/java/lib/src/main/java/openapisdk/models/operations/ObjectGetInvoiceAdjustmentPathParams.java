package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetInvoiceAdjustmentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}