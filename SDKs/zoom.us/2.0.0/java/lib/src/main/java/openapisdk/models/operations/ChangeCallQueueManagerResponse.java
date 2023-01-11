package openapisdk.models.operations;



public class ChangeCallQueueManagerResponse {
    public byte[] body;
    public ChangeCallQueueManagerResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ChangeCallQueueManagerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangeCallQueueManagerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object changeCallQueueManager204ApplicationJSONAny;
    public ChangeCallQueueManagerResponse withChangeCallQueueManager204ApplicationJsonAny(Object changeCallQueueManager204ApplicationJSONAny) {
        this.changeCallQueueManager204ApplicationJSONAny = changeCallQueueManager204ApplicationJSONAny;
        return this;
    }
}