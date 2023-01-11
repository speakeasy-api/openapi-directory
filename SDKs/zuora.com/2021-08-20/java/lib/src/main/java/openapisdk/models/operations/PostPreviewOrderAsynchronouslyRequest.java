package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPreviewOrderAsynchronouslyRequest {
    public PostPreviewOrderAsynchronouslyHeaders headers;
    public PostPreviewOrderAsynchronouslyRequest withHeaders(PostPreviewOrderAsynchronouslyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostOrderPreviewRequestType request;
    public PostPreviewOrderAsynchronouslyRequest withRequest(openapisdk.models.shared.PostOrderPreviewRequestType request) {
        this.request = request;
        return this;
    }
}