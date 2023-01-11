package openapisdk.models.operations;



public class GetProviderAccountResponse {
    public String contentType;
    public GetProviderAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProviderAccountDetailResponse providerAccountDetailResponse;
    public GetProviderAccountResponse withProviderAccountDetailResponse(openapisdk.models.shared.ProviderAccountDetailResponse providerAccountDetailResponse) {
        this.providerAccountDetailResponse = providerAccountDetailResponse;
        return this;
    }
    public Long statusCode;
    public GetProviderAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetProviderAccountResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}