package openapisdk.models.operations;



public class GetAssetsRequest {
    public GetAssetsQueryParams queryParams;
    public GetAssetsRequest withQueryParams(GetAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAssetsHeaders headers;
    public GetAssetsRequest withHeaders(GetAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAssetsSecurity security;
    public GetAssetsRequest withSecurity(GetAssetsSecurity security) {
        this.security = security;
        return this;
    }
}