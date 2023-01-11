package openapisdk.models.operations;



public class PostCreateStoredCredentialProfileResponse {
    public String contentType;
    public PostCreateStoredCredentialProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCreateStoredCredentialProfileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse;
    public PostCreateStoredCredentialProfileResponse withModifiedStoredCredentialProfileResponse(openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse) {
        this.modifiedStoredCredentialProfileResponse = modifiedStoredCredentialProfileResponse;
        return this;
    }
    public Long statusCode;
    public PostCreateStoredCredentialProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}