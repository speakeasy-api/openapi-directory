package openapisdk.models.operations;



public class JobEnableRequest {
    public JobEnablePathParams pathParams;
    public JobEnableRequest withPathParams(JobEnablePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobEnableQueryParams queryParams;
    public JobEnableRequest withQueryParams(JobEnableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobEnableHeaders headers;
    public JobEnableRequest withHeaders(JobEnableHeaders headers) {
        this.headers = headers;
        return this;
    }
}