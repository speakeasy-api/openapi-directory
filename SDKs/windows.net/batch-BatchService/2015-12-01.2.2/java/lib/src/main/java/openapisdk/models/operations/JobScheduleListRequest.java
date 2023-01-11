package openapisdk.models.operations;



public class JobScheduleListRequest {
    public JobScheduleListQueryParams queryParams;
    public JobScheduleListRequest withQueryParams(JobScheduleListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobScheduleListHeaders headers;
    public JobScheduleListRequest withHeaders(JobScheduleListHeaders headers) {
        this.headers = headers;
        return this;
    }
}