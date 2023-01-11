package openapisdk.models.operations;



public class PostCancelAuthorizationResponse {
    public String contentType;
    public PostCancelAuthorizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCancelAuthorizationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostVoidAuthorizeResponse postVoidAuthorizeResponse;
    public PostCancelAuthorizationResponse withPostVoidAuthorizeResponse(openapisdk.models.shared.PostVoidAuthorizeResponse postVoidAuthorizeResponse) {
        this.postVoidAuthorizeResponse = postVoidAuthorizeResponse;
        return this;
    }
    public Long statusCode;
    public PostCancelAuthorizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}