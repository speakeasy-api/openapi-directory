package openapisdk.models.operations;



public class GetAllAccountsResponse {
    public openapisdk.models.shared.AccountResponse accountResponse;
    public GetAllAccountsResponse withAccountResponse(openapisdk.models.shared.AccountResponse accountResponse) {
        this.accountResponse = accountResponse;
        return this;
    }
    public String contentType;
    public GetAllAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetAllAccountsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}