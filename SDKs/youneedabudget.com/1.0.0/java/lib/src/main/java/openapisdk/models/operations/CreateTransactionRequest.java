package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransactionRequest {
    public CreateTransactionPathParams pathParams;
    public CreateTransactionRequest withPathParams(CreateTransactionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SaveTransactionsWrapper request;
    public CreateTransactionRequest withRequest(openapisdk.models.shared.SaveTransactionsWrapper request) {
        this.request = request;
        return this;
    }
}