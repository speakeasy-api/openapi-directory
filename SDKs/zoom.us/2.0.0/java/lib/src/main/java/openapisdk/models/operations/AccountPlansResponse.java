package openapisdk.models.operations;



public class AccountPlansResponse {
    public byte[] body;
    public AccountPlansResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AccountPlans200ApplicationJson accountPlans200ApplicationJSONObject;
    public AccountPlansResponse withAccountPlans200ApplicationJsonObject(AccountPlans200ApplicationJson accountPlans200ApplicationJSONObject) {
        this.accountPlans200ApplicationJSONObject = accountPlans200ApplicationJSONObject;
        return this;
    }
}