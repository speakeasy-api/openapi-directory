package openapisdk.models.operations;



public class OAuth2PermissionGrantDeleteResponse {
    public String contentType;
    public OAuth2PermissionGrantDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public OAuth2PermissionGrantDeleteResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public OAuth2PermissionGrantDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}