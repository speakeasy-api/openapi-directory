package openapisdk.models.operations;



public class UpdateCallQueueResponse {
    public byte[] body;
    public UpdateCallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateCallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateCallQueue204ApplicationJSONAny;
    public UpdateCallQueueResponse withUpdateCallQueue204ApplicationJsonAny(Object updateCallQueue204ApplicationJSONAny) {
        this.updateCallQueue204ApplicationJSONAny = updateCallQueue204ApplicationJSONAny;
        return this;
    }
}