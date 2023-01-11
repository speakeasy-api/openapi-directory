package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemAdjustmentManualDistributionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice-item-adj-key")
    public String invoiceItemAdjKey;
    public PostRSforInvoiceItemAdjustmentManualDistributionPathParams withInvoiceItemAdjKey(String invoiceItemAdjKey) {
        this.invoiceItemAdjKey = invoiceItemAdjKey;
        return this;
    }
}