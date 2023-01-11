package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDataQueryJobRequest {
    public PostDataQueryJobHeaders headers;
    public PostDataQueryJobRequest withHeaders(PostDataQueryJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SubmitDataQueryRequest request;
    public PostDataQueryJobRequest withRequest(openapisdk.models.shared.SubmitDataQueryRequest request) {
        this.request = request;
        return this;
    }
}