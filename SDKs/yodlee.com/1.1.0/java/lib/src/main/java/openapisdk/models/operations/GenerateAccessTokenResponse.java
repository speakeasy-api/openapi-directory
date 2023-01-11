package openapisdk.models.operations;



public class GenerateAccessTokenResponse {
    public openapisdk.models.shared.ClientCredentialTokenResponse clientCredentialTokenResponse;
    public GenerateAccessTokenResponse withClientCredentialTokenResponse(openapisdk.models.shared.ClientCredentialTokenResponse clientCredentialTokenResponse) {
        this.clientCredentialTokenResponse = clientCredentialTokenResponse;
        return this;
    }
    public String contentType;
    public GenerateAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenerateAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GenerateAccessTokenResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}