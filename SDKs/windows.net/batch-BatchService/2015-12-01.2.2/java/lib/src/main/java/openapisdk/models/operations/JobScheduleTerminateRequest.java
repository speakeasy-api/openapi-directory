package openapisdk.models.operations;



public class JobScheduleTerminateRequest {
    public JobScheduleTerminatePathParams pathParams;
    public JobScheduleTerminateRequest withPathParams(JobScheduleTerminatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobScheduleTerminateQueryParams queryParams;
    public JobScheduleTerminateRequest withQueryParams(JobScheduleTerminateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleTerminateHeaders headers;
    public JobScheduleTerminateRequest withHeaders(JobScheduleTerminateHeaders headers) {
        this.headers = headers;
        return this;
    }
}