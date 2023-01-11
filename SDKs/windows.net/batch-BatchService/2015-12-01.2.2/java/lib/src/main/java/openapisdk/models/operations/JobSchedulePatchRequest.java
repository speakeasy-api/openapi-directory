package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobSchedulePatchRequest {
    public JobSchedulePatchPathParams pathParams;
    public JobSchedulePatchRequest withPathParams(JobSchedulePatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobSchedulePatchQueryParams queryParams;
    public JobSchedulePatchRequest withQueryParams(JobSchedulePatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobSchedulePatchHeaders headers;
    public JobSchedulePatchRequest withHeaders(JobSchedulePatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobSchedulePatchRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}