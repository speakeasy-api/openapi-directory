package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobUpdateRequest {
    public JobUpdatePathParams pathParams;
    public JobUpdateRequest withPathParams(JobUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobUpdateQueryParams queryParams;
    public JobUpdateRequest withQueryParams(JobUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobUpdateHeaders headers;
    public JobUpdateRequest withHeaders(JobUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobUpdateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}