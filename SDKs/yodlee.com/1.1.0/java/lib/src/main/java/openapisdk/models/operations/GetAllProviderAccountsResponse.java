package openapisdk.models.operations;



public class GetAllProviderAccountsResponse {
    public String contentType;
    public GetAllProviderAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProviderAccountResponse providerAccountResponse;
    public GetAllProviderAccountsResponse withProviderAccountResponse(openapisdk.models.shared.ProviderAccountResponse providerAccountResponse) {
        this.providerAccountResponse = providerAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetAllProviderAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}