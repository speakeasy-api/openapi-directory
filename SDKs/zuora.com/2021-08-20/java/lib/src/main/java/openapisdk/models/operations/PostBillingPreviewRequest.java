package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingPreviewRequest {
    public PostBillingPreviewHeaders headers;
    public PostBillingPreviewRequest withHeaders(PostBillingPreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostBillingPreviewParam request;
    public PostBillingPreviewRequest withRequest(openapisdk.models.shared.PostBillingPreviewParam request) {
        this.request = request;
        return this;
    }
}