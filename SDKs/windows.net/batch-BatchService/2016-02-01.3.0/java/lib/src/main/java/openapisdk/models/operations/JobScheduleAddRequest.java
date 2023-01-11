package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobScheduleAddRequest {
    public JobScheduleAddQueryParams queryParams;
    public JobScheduleAddRequest withQueryParams(JobScheduleAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleAddHeaders headers;
    public JobScheduleAddRequest withHeaders(JobScheduleAddHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public JobScheduleAddRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}