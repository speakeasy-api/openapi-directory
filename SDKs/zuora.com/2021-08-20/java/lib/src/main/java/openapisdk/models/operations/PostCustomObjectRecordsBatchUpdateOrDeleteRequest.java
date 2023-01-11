package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCustomObjectRecordsBatchUpdateOrDeleteRequest {
    public PostCustomObjectRecordsBatchUpdateOrDeletePathParams pathParams;
    public PostCustomObjectRecordsBatchUpdateOrDeleteRequest withPathParams(PostCustomObjectRecordsBatchUpdateOrDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostCustomObjectRecordsBatchUpdateOrDeleteHeaders headers;
    public PostCustomObjectRecordsBatchUpdateOrDeleteRequest withHeaders(PostCustomObjectRecordsBatchUpdateOrDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomObjectRecordBatchRequest request;
    public PostCustomObjectRecordsBatchUpdateOrDeleteRequest withRequest(openapisdk.models.shared.CustomObjectRecordBatchRequest request) {
        this.request = request;
        return this;
    }
}