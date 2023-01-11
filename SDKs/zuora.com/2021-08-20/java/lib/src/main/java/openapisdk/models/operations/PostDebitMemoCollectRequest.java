package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoCollectRequest {
    public PostDebitMemoCollectPathParams pathParams;
    public PostDebitMemoCollectRequest withPathParams(PostDebitMemoCollectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostDebitMemoCollectHeaders headers;
    public PostDebitMemoCollectRequest withHeaders(PostDebitMemoCollectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DebitMemoCollectRequest request;
    public PostDebitMemoCollectRequest withRequest(openapisdk.models.shared.DebitMemoCollectRequest request) {
        this.request = request;
        return this;
    }
}