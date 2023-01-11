package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWriteOffInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public PutWriteOffInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}