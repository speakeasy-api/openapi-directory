package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSbyInvoiceItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice-item-id")
    public String invoiceItemId;
    public GetRSbyInvoiceItemPathParams withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
}