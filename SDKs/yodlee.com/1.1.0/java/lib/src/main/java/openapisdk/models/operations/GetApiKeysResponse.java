package openapisdk.models.operations;



public class GetApiKeysResponse {
    public openapisdk.models.shared.ApiKeyResponse apiKeyResponse;
    public GetApiKeysResponse withApiKeyResponse(openapisdk.models.shared.ApiKeyResponse apiKeyResponse) {
        this.apiKeyResponse = apiKeyResponse;
        return this;
    }
    public String contentType;
    public GetApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}