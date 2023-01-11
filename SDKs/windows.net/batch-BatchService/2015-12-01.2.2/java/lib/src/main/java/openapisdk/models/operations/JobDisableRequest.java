package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobDisableRequest {
    public JobDisablePathParams pathParams;
    public JobDisableRequest withPathParams(JobDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobDisableQueryParams queryParams;
    public JobDisableRequest withQueryParams(JobDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobDisableHeaders headers;
    public JobDisableRequest withHeaders(JobDisableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobDisableRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}