package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRSbyInvoiceItemAdjustmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice-item-adj-key")
    public String invoiceItemAdjKey;
    public GetRSbyInvoiceItemAdjustmentPathParams withInvoiceItemAdjKey(String invoiceItemAdjKey) {
        this.invoiceItemAdjKey = invoiceItemAdjKey;
        return this;
    }
}