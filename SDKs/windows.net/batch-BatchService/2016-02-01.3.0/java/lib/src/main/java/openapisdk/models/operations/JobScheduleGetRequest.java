package openapisdk.models.operations;



public class JobScheduleGetRequest {
    public JobScheduleGetPathParams pathParams;
    public JobScheduleGetRequest withPathParams(JobScheduleGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobScheduleGetQueryParams queryParams;
    public JobScheduleGetRequest withQueryParams(JobScheduleGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleGetHeaders headers;
    public JobScheduleGetRequest withHeaders(JobScheduleGetHeaders headers) {
        this.headers = headers;
        return this;
    }
}