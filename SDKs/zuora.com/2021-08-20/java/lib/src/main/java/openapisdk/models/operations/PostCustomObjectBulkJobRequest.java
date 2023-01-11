package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectBulkJobRequest {
    public PostCustomObjectBulkJobHeaders headers;
    public PostCustomObjectBulkJobRequest withHeaders(PostCustomObjectBulkJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomObjectBulkJobRequest request;
    public PostCustomObjectBulkJobRequest withRequest(openapisdk.models.shared.CustomObjectBulkJobRequest request) {
        this.request = request;
        return this;
    }
}