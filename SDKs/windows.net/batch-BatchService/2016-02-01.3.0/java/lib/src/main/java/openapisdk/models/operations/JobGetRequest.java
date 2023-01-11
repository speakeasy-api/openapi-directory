package openapisdk.models.operations;



public class JobGetRequest {
    public JobGetPathParams pathParams;
    public JobGetRequest withPathParams(JobGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public JobGetQueryParams queryParams;
    public JobGetRequest withQueryParams(JobGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public JobGetHeaders headers;
    public JobGetRequest withHeaders(JobGetHeaders headers) {
        this.headers = headers;
        return this;
    }
}