package openapisdk.models.operations;



public class PostCancelStoredCredentialProfileResponse {
    public String contentType;
    public PostCancelStoredCredentialProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCancelStoredCredentialProfileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse;
    public PostCancelStoredCredentialProfileResponse withModifiedStoredCredentialProfileResponse(openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse) {
        this.modifiedStoredCredentialProfileResponse = modifiedStoredCredentialProfileResponse;
        return this;
    }
    public Long statusCode;
    public PostCancelStoredCredentialProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}