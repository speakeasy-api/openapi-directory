package openapisdk.models.operations;



public class DeleteCallLogResponse {
    public byte[] body;
    public DeleteCallLogResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteCallLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteCallLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteCallLog204ApplicationJSONAny;
    public DeleteCallLogResponse withDeleteCallLog204ApplicationJsonAny(Object deleteCallLog204ApplicationJSONAny) {
        this.deleteCallLog204ApplicationJSONAny = deleteCallLog204ApplicationJSONAny;
        return this;
    }
}