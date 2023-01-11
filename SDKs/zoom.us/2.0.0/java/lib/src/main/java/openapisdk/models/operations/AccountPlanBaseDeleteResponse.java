package openapisdk.models.operations;



public class AccountPlanBaseDeleteResponse {
    public byte[] body;
    public AccountPlanBaseDeleteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountPlanBaseDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountPlanBaseDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> accountPlanBaseDelete204ApplicationJSONObject;
    public AccountPlanBaseDeleteResponse withAccountPlanBaseDelete204ApplicationJsonObject(java.util.Map<String, Object> accountPlanBaseDelete204ApplicationJSONObject) {
        this.accountPlanBaseDelete204ApplicationJSONObject = accountPlanBaseDelete204ApplicationJSONObject;
        return this;
    }
}