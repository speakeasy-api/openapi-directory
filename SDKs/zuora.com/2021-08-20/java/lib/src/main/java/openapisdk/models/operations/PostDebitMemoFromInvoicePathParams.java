package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoFromInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public PostDebitMemoFromInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}