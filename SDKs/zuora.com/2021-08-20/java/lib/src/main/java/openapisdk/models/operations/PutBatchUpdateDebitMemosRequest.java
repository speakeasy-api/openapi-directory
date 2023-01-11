package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBatchUpdateDebitMemosRequest {
    public PutBatchUpdateDebitMemosHeaders headers;
    public PutBatchUpdateDebitMemosRequest withHeaders(PutBatchUpdateDebitMemosHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutBatchDebitMemosRequest request;
    public PutBatchUpdateDebitMemosRequest withRequest(openapisdk.models.shared.PutBatchDebitMemosRequest request) {
        this.request = request;
        return this;
    }
}