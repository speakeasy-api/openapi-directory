package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transaction_id")
    public String transactionId;
    public GetPaymentPathParams withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}