package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBillingPreviewRunRequest {
    public PostBillingPreviewRunHeaders headers;
    public PostBillingPreviewRunRequest withHeaders(PostBillingPreviewRunHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostBillingPreviewRunParam request;
    public PostBillingPreviewRunRequest withRequest(openapisdk.models.shared.PostBillingPreviewRunParam request) {
        this.request = request;
        return this;
    }
}