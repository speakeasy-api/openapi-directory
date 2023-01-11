package openapisdk.models.operations;



public class EditCredentialsOrRefreshProviderAccountResponse {
    public String contentType;
    public EditCredentialsOrRefreshProviderAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditCredentialsOrRefreshProviderAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatedProviderAccountResponse updatedProviderAccountResponse;
    public EditCredentialsOrRefreshProviderAccountResponse withUpdatedProviderAccountResponse(openapisdk.models.shared.UpdatedProviderAccountResponse updatedProviderAccountResponse) {
        this.updatedProviderAccountResponse = updatedProviderAccountResponse;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public EditCredentialsOrRefreshProviderAccountResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}