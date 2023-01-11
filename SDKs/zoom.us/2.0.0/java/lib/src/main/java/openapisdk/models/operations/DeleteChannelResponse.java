package openapisdk.models.operations;



public class DeleteChannelResponse {
    public byte[] body;
    public DeleteChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteChannel204ApplicationJSONAny;
    public DeleteChannelResponse withDeleteChannel204ApplicationJsonAny(Object deleteChannel204ApplicationJSONAny) {
        this.deleteChannel204ApplicationJSONAny = deleteChannel204ApplicationJSONAny;
        return this;
    }
}