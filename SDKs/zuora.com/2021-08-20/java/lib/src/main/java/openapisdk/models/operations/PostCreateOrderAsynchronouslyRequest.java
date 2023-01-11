package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOrderAsynchronouslyRequest {
    public PostCreateOrderAsynchronouslyQueryParams queryParams;
    public PostCreateOrderAsynchronouslyRequest withQueryParams(PostCreateOrderAsynchronouslyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateOrderAsynchronouslyHeaders headers;
    public PostCreateOrderAsynchronouslyRequest withHeaders(PostCreateOrderAsynchronouslyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostOrderRequestType request;
    public PostCreateOrderAsynchronouslyRequest withRequest(openapisdk.models.shared.PostOrderRequestType request) {
        this.request = request;
        return this;
    }
}