package openapisdk.models.operations;



public class GetDataQueryJobsRequest {
    public GetDataQueryJobsQueryParams queryParams;
    public GetDataQueryJobsRequest withQueryParams(GetDataQueryJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDataQueryJobsHeaders headers;
    public GetDataQueryJobsRequest withHeaders(GetDataQueryJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
}