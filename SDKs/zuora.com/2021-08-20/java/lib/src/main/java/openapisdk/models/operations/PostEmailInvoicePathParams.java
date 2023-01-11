package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public PostEmailInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}