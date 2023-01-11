package openapisdk.models.operations;



public class DeleteACallQueueResponse {
    public byte[] body;
    public DeleteACallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteACallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteACallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteACallQueue204ApplicationJSONAny;
    public DeleteACallQueueResponse withDeleteACallQueue204ApplicationJsonAny(Object deleteACallQueue204ApplicationJSONAny) {
        this.deleteACallQueue204ApplicationJSONAny = deleteACallQueue204ApplicationJSONAny;
        return this;
    }
}