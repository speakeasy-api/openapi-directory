package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleUpdateRequest {
    public JobScheduleUpdatePathParams pathParams;
    public JobScheduleUpdateRequest withPathParams(JobScheduleUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobScheduleUpdateQueryParams queryParams;
    public JobScheduleUpdateRequest withQueryParams(JobScheduleUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleUpdateHeaders headers;
    public JobScheduleUpdateRequest withHeaders(JobScheduleUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobScheduleUpdateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}