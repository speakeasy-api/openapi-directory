package openapisdk.models.operations;



public class GetProvidersCountResponse {
    public String contentType;
    public GetProvidersCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProvidersCountResponse providersCountResponse;
    public GetProvidersCountResponse withProvidersCountResponse(openapisdk.models.shared.ProvidersCountResponse providersCountResponse) {
        this.providersCountResponse = providersCountResponse;
        return this;
    }
    public Long statusCode;
    public GetProvidersCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetProvidersCountResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}