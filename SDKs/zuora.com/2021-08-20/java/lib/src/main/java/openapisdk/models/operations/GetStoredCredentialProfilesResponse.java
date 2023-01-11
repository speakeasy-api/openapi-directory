package openapisdk.models.operations;



public class GetStoredCredentialProfilesResponse {
    public String contentType;
    public GetStoredCredentialProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStoredCredentialProfilesResponse getStoredCredentialProfilesResponse;
    public GetStoredCredentialProfilesResponse withGetStoredCredentialProfilesResponse(openapisdk.models.shared.GetStoredCredentialProfilesResponse getStoredCredentialProfilesResponse) {
        this.getStoredCredentialProfilesResponse = getStoredCredentialProfilesResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetStoredCredentialProfilesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetStoredCredentialProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}