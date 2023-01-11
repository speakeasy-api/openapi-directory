package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskUpdateRequest {
    public TaskUpdatePathParams pathParams;
    public TaskUpdateRequest withPathParams(TaskUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskUpdateQueryParams queryParams;
    public TaskUpdateRequest withQueryParams(TaskUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskUpdateHeaders headers;
    public TaskUpdateRequest withHeaders(TaskUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public TaskUpdateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}