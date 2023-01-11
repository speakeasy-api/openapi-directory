package openapisdk.models.operations;



public class GetProviderResponse {
    public String contentType;
    public GetProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProviderDetailResponse providerDetailResponse;
    public GetProviderResponse withProviderDetailResponse(openapisdk.models.shared.ProviderDetailResponse providerDetailResponse) {
        this.providerDetailResponse = providerDetailResponse;
        return this;
    }
    public Long statusCode;
    public GetProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetProviderResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}