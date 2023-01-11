package openapisdk.models.operations;



public class AccountsResponse {
    public AccountsAccountList accountList;
    public AccountsResponse withAccountList(AccountsAccountList accountList) {
        this.accountList = accountList;
        return this;
    }
    public byte[] body;
    public AccountsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}