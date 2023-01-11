package openapisdk.models.operations;



public class PostExpireStoredCredentialProfileResponse {
    public String contentType;
    public PostExpireStoredCredentialProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostExpireStoredCredentialProfileResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse;
    public PostExpireStoredCredentialProfileResponse withModifiedStoredCredentialProfileResponse(openapisdk.models.shared.ModifiedStoredCredentialProfileResponse modifiedStoredCredentialProfileResponse) {
        this.modifiedStoredCredentialProfileResponse = modifiedStoredCredentialProfileResponse;
        return this;
    }
    public Long statusCode;
    public PostExpireStoredCredentialProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}