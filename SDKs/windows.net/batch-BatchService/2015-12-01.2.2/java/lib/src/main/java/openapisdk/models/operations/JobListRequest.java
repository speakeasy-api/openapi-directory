package openapisdk.models.operations;



public class JobListRequest {
    public JobListQueryParams queryParams;
    public JobListRequest withQueryParams(JobListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobListHeaders headers;
    public JobListRequest withHeaders(JobListHeaders headers) {
        this.headers = headers;
        return this;
    }
}