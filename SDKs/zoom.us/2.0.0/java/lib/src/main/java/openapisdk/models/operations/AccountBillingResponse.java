package openapisdk.models.operations;



public class AccountBillingResponse {
    public byte[] body;
    public AccountBillingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountBillingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountBillingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountBilling200ApplicationJson accountBilling200ApplicationJSONObject;
    public AccountBillingResponse withAccountBilling200ApplicationJsonObject(AccountBilling200ApplicationJson accountBilling200ApplicationJSONObject) {
        this.accountBilling200ApplicationJSONObject = accountBilling200ApplicationJSONObject;
        return this;
    }
}