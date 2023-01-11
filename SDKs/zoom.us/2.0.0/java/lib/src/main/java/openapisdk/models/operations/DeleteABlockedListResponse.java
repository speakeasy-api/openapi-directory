package openapisdk.models.operations;



public class DeleteABlockedListResponse {
    public byte[] body;
    public DeleteABlockedListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteABlockedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteABlockedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteABlockedList204ApplicationJSONAny;
    public DeleteABlockedListResponse withDeleteABlockedList204ApplicationJsonAny(Object deleteABlockedList204ApplicationJSONAny) {
        this.deleteABlockedList204ApplicationJSONAny = deleteABlockedList204ApplicationJSONAny;
        return this;
    }
}