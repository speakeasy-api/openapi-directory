package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOrderRequest {
    public PostOrderQueryParams queryParams;
    public PostOrderRequest withQueryParams(PostOrderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostOrderHeaders headers;
    public PostOrderRequest withHeaders(PostOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostOrderRequestType request;
    public PostOrderRequest withRequest(openapisdk.models.shared.PostOrderRequestType request) {
        this.request = request;
        return this;
    }
}