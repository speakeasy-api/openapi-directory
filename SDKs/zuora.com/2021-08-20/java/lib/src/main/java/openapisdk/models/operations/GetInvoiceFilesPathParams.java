package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public GetInvoiceFilesPathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}