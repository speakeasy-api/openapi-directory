package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobTerminateRequest {
    public JobTerminatePathParams pathParams;
    public JobTerminateRequest withPathParams(JobTerminatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobTerminateQueryParams queryParams;
    public JobTerminateRequest withQueryParams(JobTerminateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobTerminateHeaders headers;
    public JobTerminateRequest withHeaders(JobTerminateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobTerminateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}