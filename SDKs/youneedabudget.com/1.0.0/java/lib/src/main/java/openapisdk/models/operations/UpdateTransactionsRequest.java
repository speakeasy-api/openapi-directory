package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionsRequest {
    public UpdateTransactionsPathParams pathParams;
    public UpdateTransactionsRequest withPathParams(UpdateTransactionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTransactionsWrapper request;
    public UpdateTransactionsRequest withRequest(openapisdk.models.shared.UpdateTransactionsWrapper request) {
        this.request = request;
        return this;
    }
}