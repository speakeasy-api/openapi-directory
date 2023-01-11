package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostInvoicePaymentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rejectUnknownFields")
    public Boolean rejectUnknownFields;
    public ObjectPostInvoicePaymentQueryParams withRejectUnknownFields(Boolean rejectUnknownFields) {
        this.rejectUnknownFields = rejectUnknownFields;
        return this;
    }
}