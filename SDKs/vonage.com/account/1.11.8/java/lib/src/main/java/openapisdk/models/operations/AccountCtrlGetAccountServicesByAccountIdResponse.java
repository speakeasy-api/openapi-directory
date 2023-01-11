package openapisdk.models.operations;



public class AccountCtrlGetAccountServicesByAccountIdResponse {
    public openapisdk.models.shared.AccountHalResponse accountHalResponse;
    public AccountCtrlGetAccountServicesByAccountIdResponse withAccountHalResponse(openapisdk.models.shared.AccountHalResponse accountHalResponse) {
        this.accountHalResponse = accountHalResponse;
        return this;
    }
    public String contentType;
    public AccountCtrlGetAccountServicesByAccountIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountCtrlGetAccountServicesByAccountIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}