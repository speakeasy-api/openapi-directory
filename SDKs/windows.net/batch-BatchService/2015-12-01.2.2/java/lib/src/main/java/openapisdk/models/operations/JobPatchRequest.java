package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobPatchRequest {
    public JobPatchPathParams pathParams;
    public JobPatchRequest withPathParams(JobPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobPatchQueryParams queryParams;
    public JobPatchRequest withQueryParams(JobPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobPatchHeaders headers;
    public JobPatchRequest withHeaders(JobPatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobPatchRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}