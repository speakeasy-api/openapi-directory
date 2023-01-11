package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskAddRequest {
    public TaskAddPathParams pathParams;
    public TaskAddRequest withPathParams(TaskAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TaskAddQueryParams queryParams;
    public TaskAddRequest withQueryParams(TaskAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TaskAddHeaders headers;
    public TaskAddRequest withHeaders(TaskAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public TaskAddRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}