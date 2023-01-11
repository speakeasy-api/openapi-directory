package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddCollectionRequest {
    public TaskAddCollectionPathParams pathParams;
    public TaskAddCollectionRequest withPathParams(TaskAddCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskAddCollectionQueryParams queryParams;
    public TaskAddCollectionRequest withQueryParams(TaskAddCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskAddCollectionHeaders headers;
    public TaskAddCollectionRequest withHeaders(TaskAddCollectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public TaskAddCollectionRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}