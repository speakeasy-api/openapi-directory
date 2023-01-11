package openapisdk.models.operations;



public class JobListFromJobScheduleRequest {
    public JobListFromJobSchedulePathParams pathParams;
    public JobListFromJobScheduleRequest withPathParams(JobListFromJobSchedulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobListFromJobScheduleQueryParams queryParams;
    public JobListFromJobScheduleRequest withQueryParams(JobListFromJobScheduleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobListFromJobScheduleHeaders headers;
    public JobListFromJobScheduleRequest withHeaders(JobListFromJobScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
}