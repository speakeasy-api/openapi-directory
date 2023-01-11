package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTaxationItemsOfInvoiceItemPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public GetTaxationItemsOfInvoiceItemPathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public GetTaxationItemsOfInvoiceItemPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}