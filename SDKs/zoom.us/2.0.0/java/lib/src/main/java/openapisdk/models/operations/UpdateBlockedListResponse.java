package openapisdk.models.operations;



public class UpdateBlockedListResponse {
    public byte[] body;
    public UpdateBlockedListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateBlockedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBlockedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateBlockedList204ApplicationJSONAny;
    public UpdateBlockedListResponse withUpdateBlockedList204ApplicationJsonAny(Object updateBlockedList204ApplicationJSONAny) {
        this.updateBlockedList204ApplicationJSONAny = updateBlockedList204ApplicationJSONAny;
        return this;
    }
}