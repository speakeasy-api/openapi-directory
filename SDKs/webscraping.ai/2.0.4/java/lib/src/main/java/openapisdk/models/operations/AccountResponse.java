package openapisdk.models.operations;



public class AccountResponse {
    public openapisdk.models.shared.Account account;
    public AccountResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public AccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public AccountResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public AccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}