package openapisdk.models.operations;



public class PostCreateAuthorizationResponse {
    public String contentType;
    public PostCreateAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreateAuthorizationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostAuthorizeResponse postAuthorizeResponse;
    public PostCreateAuthorizationResponse withPostAuthorizeResponse(openapisdk.models.shared.PostAuthorizeResponse postAuthorizeResponse) {
        this.postAuthorizeResponse = postAuthorizeResponse;
        return this;
    }
    public Long statusCode;
    public PostCreateAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}