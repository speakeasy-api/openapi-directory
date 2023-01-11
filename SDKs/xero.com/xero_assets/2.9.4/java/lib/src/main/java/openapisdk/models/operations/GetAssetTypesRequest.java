package openapisdk.models.operations;



public class GetAssetTypesRequest {
    public GetAssetTypesHeaders headers;
    public GetAssetTypesRequest withHeaders(GetAssetTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetAssetTypesSecurity security;
    public GetAssetTypesRequest withSecurity(GetAssetTypesSecurity security) {
        this.security = security;
        return this;
    }
}