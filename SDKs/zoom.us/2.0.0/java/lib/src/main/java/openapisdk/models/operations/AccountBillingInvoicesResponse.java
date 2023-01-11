package openapisdk.models.operations;



public class AccountBillingInvoicesResponse {
    public byte[] body;
    public AccountBillingInvoicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountBillingInvoicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountBillingInvoicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountBillingInvoices200ApplicationJson accountBillingInvoices200ApplicationJSONObject;
    public AccountBillingInvoicesResponse withAccountBillingInvoices200ApplicationJsonObject(AccountBillingInvoices200ApplicationJson accountBillingInvoices200ApplicationJSONObject) {
        this.accountBillingInvoices200ApplicationJSONObject = accountBillingInvoices200ApplicationJSONObject;
        return this;
    }
}