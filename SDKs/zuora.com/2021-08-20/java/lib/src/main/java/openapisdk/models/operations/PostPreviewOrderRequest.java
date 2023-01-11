package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPreviewOrderRequest {
    public PostPreviewOrderHeaders headers;
    public PostPreviewOrderRequest withHeaders(PostPreviewOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostOrderPreviewRequestType request;
    public PostPreviewOrderRequest withRequest(openapisdk.models.shared.PostOrderPreviewRequestType request) {
        this.request = request;
        return this;
    }
}