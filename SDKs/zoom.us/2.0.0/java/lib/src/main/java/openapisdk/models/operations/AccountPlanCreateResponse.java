package openapisdk.models.operations;



public class AccountPlanCreateResponse {
    public byte[] body;
    public AccountPlanCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountPlanCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountPlanCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object accountPlanCreate200ApplicationJSONAny;
    public AccountPlanCreateResponse withAccountPlanCreate200ApplicationJsonAny(Object accountPlanCreate200ApplicationJSONAny) {
        this.accountPlanCreate200ApplicationJSONAny = accountPlanCreate200ApplicationJSONAny;
        return this;
    }
    public AccountPlanCreate201ApplicationJson accountPlanCreate201ApplicationJSONObject;
    public AccountPlanCreateResponse withAccountPlanCreate201ApplicationJsonObject(AccountPlanCreate201ApplicationJson accountPlanCreate201ApplicationJSONObject) {
        this.accountPlanCreate201ApplicationJSONObject = accountPlanCreate201ApplicationJSONObject;
        return this;
    }
}