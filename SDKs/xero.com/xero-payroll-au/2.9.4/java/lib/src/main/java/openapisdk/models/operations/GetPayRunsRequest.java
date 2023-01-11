package openapisdk.models.operations;



public class GetPayRunsRequest {
    public GetPayRunsQueryParams queryParams;
    public GetPayRunsRequest withQueryParams(GetPayRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPayRunsHeaders headers;
    public GetPayRunsRequest withHeaders(GetPayRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayRunsSecurity security;
    public GetPayRunsRequest withSecurity(GetPayRunsSecurity security) {
        this.security = security;
        return this;
    }
}