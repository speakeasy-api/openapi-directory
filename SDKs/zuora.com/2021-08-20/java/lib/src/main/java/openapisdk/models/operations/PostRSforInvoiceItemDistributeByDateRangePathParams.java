package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemDistributeByDateRangePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice-item-id")
    public String invoiceItemId;
    public PostRSforInvoiceItemDistributeByDateRangePathParams withInvoiceItemId(String invoiceItemId) {
        this.invoiceItemId = invoiceItemId;
        return this;
    }
}