package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReverseInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public PutReverseInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}