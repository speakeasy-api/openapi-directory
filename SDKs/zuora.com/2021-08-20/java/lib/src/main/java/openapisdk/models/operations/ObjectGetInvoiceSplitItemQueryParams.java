package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceSplitItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetInvoiceSplitItemQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}