package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectGetRefundInvoicePaymentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public ObjectGetRefundInvoicePaymentQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
}