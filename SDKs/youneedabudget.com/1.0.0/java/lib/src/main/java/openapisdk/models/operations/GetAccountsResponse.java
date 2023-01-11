package openapisdk.models.operations;



public class GetAccountsResponse {
    public openapisdk.models.shared.AccountsResponse accountsResponse;
    public GetAccountsResponse withAccountsResponse(openapisdk.models.shared.AccountsResponse accountsResponse) {
        this.accountsResponse = accountsResponse;
        return this;
    }
    public String contentType;
    public GetAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetAccountsResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}