package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionRequest {
    public UpdateTransactionPathParams pathParams;
    public UpdateTransactionRequest withPathParams(UpdateTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransactionRequestInput request;
    public UpdateTransactionRequest withRequest(openapisdk.models.shared.TransactionRequestInput request) {
        this.request = request;
        return this;
    }
}