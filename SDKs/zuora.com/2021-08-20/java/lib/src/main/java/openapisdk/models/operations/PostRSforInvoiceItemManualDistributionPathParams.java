package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemManualDistributionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice-item-id")
    public String invoiceItemId;
    public PostRSforInvoiceItemManualDistributionPathParams withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
}