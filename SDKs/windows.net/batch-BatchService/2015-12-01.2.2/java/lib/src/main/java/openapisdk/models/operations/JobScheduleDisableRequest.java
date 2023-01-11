package openapisdk.models.operations;



public class JobScheduleDisableRequest {
    public JobScheduleDisablePathParams pathParams;
    public JobScheduleDisableRequest withPathParams(JobScheduleDisablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobScheduleDisableQueryParams queryParams;
    public JobScheduleDisableRequest withQueryParams(JobScheduleDisableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleDisableHeaders headers;
    public JobScheduleDisableRequest withHeaders(JobScheduleDisableHeaders headers) {
        this.headers = headers;
        return this;
    }
}