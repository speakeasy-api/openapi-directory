package openapisdk.models.operations;



public class GenerateApiKeyResponse {
    public openapisdk.models.shared.ApiKeyResponse apiKeyResponse;
    public GenerateApiKeyResponse withApiKeyResponse(openapisdk.models.shared.ApiKeyResponse apiKeyResponse) {
        this.apiKeyResponse = apiKeyResponse;
        return this;
    }
    public String contentType;
    public GenerateApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenerateApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GenerateApiKeyResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}