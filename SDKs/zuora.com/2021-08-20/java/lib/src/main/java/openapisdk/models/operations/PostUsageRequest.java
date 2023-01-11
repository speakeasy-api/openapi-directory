package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsageRequest {
    public PostUsageHeaders headers;
    public PostUsageRequest withHeaders(PostUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUsageRequestBody request;
    public PostUsageRequest withRequest(PostUsageRequestBody request) {
        this.request = request;
        return this;
    }
}