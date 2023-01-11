package openapisdk.models.operations;



public class GetProductRatePlansRequest {
    public GetProductRatePlansPathParams pathParams;
    public GetProductRatePlansRequest withPathParams(GetProductRatePlansPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProductRatePlansQueryParams queryParams;
    public GetProductRatePlansRequest withQueryParams(GetProductRatePlansQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProductRatePlansHeaders headers;
    public GetProductRatePlansRequest withHeaders(GetProductRatePlansHeaders headers) {
        this.headers = headers;
        return this;
    }
}