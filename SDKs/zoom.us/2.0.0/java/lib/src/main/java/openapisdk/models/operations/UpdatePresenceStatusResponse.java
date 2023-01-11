package openapisdk.models.operations;



public class UpdatePresenceStatusResponse {
    public byte[] body;
    public UpdatePresenceStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePresenceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePresenceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatePresenceStatus204ApplicationJSONAny;
    public UpdatePresenceStatusResponse withUpdatePresenceStatus204ApplicationJsonAny(Object updatePresenceStatus204ApplicationJSONAny) {
        this.updatePresenceStatus204ApplicationJSONAny = updatePresenceStatus204ApplicationJSONAny;
        return this;
    }
}