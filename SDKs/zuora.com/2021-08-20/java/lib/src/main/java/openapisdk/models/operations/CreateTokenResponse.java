package openapisdk.models.operations;



public class CreateTokenResponse {
    public String contentType;
    public CreateTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateTokenResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TokenResponse tokenResponse;
    public CreateTokenResponse withTokenResponse(openapisdk.models.shared.TokenResponse tokenResponse) {
        this.tokenResponse = tokenResponse;
        return this;
    }
}