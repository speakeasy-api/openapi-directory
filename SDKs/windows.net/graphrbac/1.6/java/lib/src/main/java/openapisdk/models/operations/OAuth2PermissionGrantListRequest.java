package openapisdk.models.operations;



public class OAuth2PermissionGrantListRequest {
    public OAuth2PermissionGrantListPathParams pathParams;
    public OAuth2PermissionGrantListRequest withPathParams(OAuth2PermissionGrantListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OAuth2PermissionGrantListQueryParams queryParams;
    public OAuth2PermissionGrantListRequest withQueryParams(OAuth2PermissionGrantListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}