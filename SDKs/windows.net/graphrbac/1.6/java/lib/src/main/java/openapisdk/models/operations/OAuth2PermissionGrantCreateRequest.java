package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OAuth2PermissionGrantCreateRequest {
    public OAuth2PermissionGrantCreatePathParams pathParams;
    public OAuth2PermissionGrantCreateRequest withPathParams(OAuth2PermissionGrantCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OAuth2PermissionGrantCreateQueryParams queryParams;
    public OAuth2PermissionGrantCreateRequest withQueryParams(OAuth2PermissionGrantCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public OAuth2PermissionGrantCreateRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}