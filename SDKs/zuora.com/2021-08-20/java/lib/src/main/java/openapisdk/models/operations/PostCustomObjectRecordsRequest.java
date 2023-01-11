package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectRecordsRequest {
    public PostCustomObjectRecordsPathParams pathParams;
    public PostCustomObjectRecordsRequest withPathParams(PostCustomObjectRecordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCustomObjectRecordsHeaders headers;
    public PostCustomObjectRecordsRequest withHeaders(PostCustomObjectRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCustomObjectRecordsRequest request;
    public PostCustomObjectRecordsRequest withRequest(openapisdk.models.shared.PostCustomObjectRecordsRequest request) {
        this.request = request;
        return this;
    }
}