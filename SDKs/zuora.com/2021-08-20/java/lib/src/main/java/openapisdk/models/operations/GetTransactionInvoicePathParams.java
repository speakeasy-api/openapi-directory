package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionInvoicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetTransactionInvoicePathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}