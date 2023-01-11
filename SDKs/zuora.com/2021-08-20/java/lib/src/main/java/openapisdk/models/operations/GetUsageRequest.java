package openapisdk.models.operations;



public class GetUsageRequest {
    public GetUsagePathParams pathParams;
    public GetUsageRequest withPathParams(GetUsagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsageQueryParams queryParams;
    public GetUsageRequest withQueryParams(GetUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUsageHeaders headers;
    public GetUsageRequest withHeaders(GetUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
}