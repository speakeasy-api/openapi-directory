package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=account-key")
    public String accountKey;
    public GetTransactionPaymentPathParams withAccountKey(String accountKey) {
        this.accountKey = accountKey;
        return this;
    }
}