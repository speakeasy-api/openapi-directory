package openapisdk.models.operations;



public class OAuth2PermissionGrantCreateResponse {
    public String contentType;
    public OAuth2PermissionGrantCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object oAuth2PermissionGrant;
    public OAuth2PermissionGrantCreateResponse withOAuth2PermissionGrant(Object oAuth2PermissionGrant) {
        this.oAuth2PermissionGrant = oAuth2PermissionGrant;
        return this;
    }
    public Long statusCode;
    public OAuth2PermissionGrantCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}