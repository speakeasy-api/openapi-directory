package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceSplitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ObjectGetInvoiceSplitPathParams withId(String id) {
        this.id = id;
        return this;
    }
}