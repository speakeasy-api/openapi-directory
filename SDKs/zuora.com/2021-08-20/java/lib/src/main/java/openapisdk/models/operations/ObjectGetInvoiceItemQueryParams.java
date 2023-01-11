package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetInvoiceItemQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}