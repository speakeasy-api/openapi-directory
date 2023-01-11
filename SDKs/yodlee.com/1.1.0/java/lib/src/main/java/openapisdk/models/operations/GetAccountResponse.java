package openapisdk.models.operations;



public class GetAccountResponse {
    public openapisdk.models.shared.AccountResponse accountResponse;
    public GetAccountResponse withAccountResponse(openapisdk.models.shared.AccountResponse accountResponse) {
        this.accountResponse = accountResponse;
        return this;
    }
    public String contentType;
    public GetAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}