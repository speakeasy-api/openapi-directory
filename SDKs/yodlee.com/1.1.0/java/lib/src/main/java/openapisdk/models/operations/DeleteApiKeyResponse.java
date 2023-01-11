package openapisdk.models.operations;



public class DeleteApiKeyResponse {
    public String contentType;
    public DeleteApiKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteApiKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public DeleteApiKeyResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}