package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadInvoicePdfPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public DownloadInvoicePdfPathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}