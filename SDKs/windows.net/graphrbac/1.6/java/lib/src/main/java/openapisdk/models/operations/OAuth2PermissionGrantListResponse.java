package openapisdk.models.operations;



public class OAuth2PermissionGrantListResponse {
    public String contentType;
    public OAuth2PermissionGrantListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OAuth2PermissionGrantListResult oAuth2PermissionGrantListResult;
    public OAuth2PermissionGrantListResponse withOAuth2PermissionGrantListResult(openapisdk.models.shared.OAuth2PermissionGrantListResult oAuth2PermissionGrantListResult) {
        this.oAuth2PermissionGrantListResult = oAuth2PermissionGrantListResult;
        return this;
    }
    public Long statusCode;
    public OAuth2PermissionGrantListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}