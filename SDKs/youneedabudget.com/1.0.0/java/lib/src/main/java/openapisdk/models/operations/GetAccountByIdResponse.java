package openapisdk.models.operations;



public class GetAccountByIdResponse {
    public openapisdk.models.shared.AccountResponse accountResponse;
    public GetAccountByIdResponse withAccountResponse(openapisdk.models.shared.AccountResponse accountResponse) {
        this.accountResponse = accountResponse;
        return this;
    }
    public String contentType;
    public GetAccountByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetAccountByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}