package openapisdk.models.operations;



public class GetSuperfundProductsRequest {
    public GetSuperfundProductsQueryParams queryParams;
    public GetSuperfundProductsRequest withQueryParams(GetSuperfundProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSuperfundProductsHeaders headers;
    public GetSuperfundProductsRequest withHeaders(GetSuperfundProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetSuperfundProductsSecurity security;
    public GetSuperfundProductsRequest withSecurity(GetSuperfundProductsSecurity security) {
        this.security = security;
        return this;
    }
}