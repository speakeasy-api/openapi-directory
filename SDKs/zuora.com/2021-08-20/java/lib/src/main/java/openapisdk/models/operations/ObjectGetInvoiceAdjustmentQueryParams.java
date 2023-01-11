package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceAdjustmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetInvoiceAdjustmentQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}