package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionId")
    public Long transactionId;
    public UpdateTransactionPathParams withTransactionId(Long transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}