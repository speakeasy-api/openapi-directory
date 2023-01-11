package openapisdk.models.operations;



public class UpdateAccountOwnerResponse {
    public byte[] body;
    public UpdateAccountOwnerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateAccountOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAccountOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateAccountOwner204ApplicationJSONAny;
    public UpdateAccountOwnerResponse withUpdateAccountOwner204ApplicationJsonAny(Object updateAccountOwner204ApplicationJSONAny) {
        this.updateAccountOwner204ApplicationJSONAny = updateAccountOwner204ApplicationJSONAny;
        return this;
    }
}