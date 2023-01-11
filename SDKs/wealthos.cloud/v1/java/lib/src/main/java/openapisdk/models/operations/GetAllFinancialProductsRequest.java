package openapisdk.models.operations;



public class GetAllFinancialProductsRequest {
    public GetAllFinancialProductsQueryParams queryParams;
    public GetAllFinancialProductsRequest withQueryParams(GetAllFinancialProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAllFinancialProductsHeaders headers;
    public GetAllFinancialProductsRequest withHeaders(GetAllFinancialProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAllFinancialProductsSecurity security;
    public GetAllFinancialProductsRequest withSecurity(GetAllFinancialProductsSecurity security) {
        this.security = security;
        return this;
    }
}