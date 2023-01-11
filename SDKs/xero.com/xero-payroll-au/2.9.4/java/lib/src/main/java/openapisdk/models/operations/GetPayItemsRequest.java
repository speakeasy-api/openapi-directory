package openapisdk.models.operations;



public class GetPayItemsRequest {
    public GetPayItemsQueryParams queryParams;
    public GetPayItemsRequest withQueryParams(GetPayItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPayItemsHeaders headers;
    public GetPayItemsRequest withHeaders(GetPayItemsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetPayItemsSecurity security;
    public GetPayItemsRequest withSecurity(GetPayItemsSecurity security) {
        this.security = security;
        return this;
    }
}