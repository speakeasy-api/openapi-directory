package openapisdk.models.operations;



public class GetAllProvidersResponse {
    public String contentType;
    public GetAllProvidersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProviderResponse providerResponse;
    public GetAllProvidersResponse withProviderResponse(openapisdk.models.shared.ProviderResponse providerResponse) {
        this.providerResponse = providerResponse;
        return this;
    }
    public Long statusCode;
    public GetAllProvidersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetAllProvidersResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}