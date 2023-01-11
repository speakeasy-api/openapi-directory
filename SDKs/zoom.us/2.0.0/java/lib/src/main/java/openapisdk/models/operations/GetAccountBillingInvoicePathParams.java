package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountBillingInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetAccountBillingInvoicePathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoiceId")
    public String invoiceId;
    public GetAccountBillingInvoicePathParams withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
}