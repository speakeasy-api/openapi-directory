package openapisdk.models.operations;



public class GetCatalogRequest {
    public GetCatalogQueryParams queryParams;
    public GetCatalogRequest withQueryParams(GetCatalogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCatalogHeaders headers;
    public GetCatalogRequest withHeaders(GetCatalogHeaders headers) {
        this.headers = headers;
        return this;
    }
}