package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkCreateTransactionsRequest {
    public BulkCreateTransactionsPathParams pathParams;
    public BulkCreateTransactionsRequest withPathParams(BulkCreateTransactionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkTransactions request;
    public BulkCreateTransactionsRequest withRequest(openapisdk.models.shared.BulkTransactions request) {
        this.request = request;
        return this;
    }
}