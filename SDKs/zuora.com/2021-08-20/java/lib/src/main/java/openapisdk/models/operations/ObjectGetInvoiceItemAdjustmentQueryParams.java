package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetInvoiceItemAdjustmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetInvoiceItemAdjustmentQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}