package openapisdk.models.operations;



public class AccountPlanAddonCancelResponse {
    public byte[] body;
    public AccountPlanAddonCancelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AccountPlanAddonCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountPlanAddonCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object accountPlanAddonCancel204ApplicationJSONAny;
    public AccountPlanAddonCancelResponse withAccountPlanAddonCancel204ApplicationJsonAny(Object accountPlanAddonCancel204ApplicationJSONAny) {
        this.accountPlanAddonCancel204ApplicationJSONAny = accountPlanAddonCancel204ApplicationJSONAny;
        return this;
    }
}