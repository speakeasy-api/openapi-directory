package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreditMemoFromInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public PostCreditMemoFromInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}