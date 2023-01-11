package openapisdk.models.operations;



public class UpdateChannelResponse {
    public byte[] body;
    public UpdateChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateChannel204ApplicationJSONAny;
    public UpdateChannelResponse withUpdateChannel204ApplicationJsonAny(Object updateChannel204ApplicationJSONAny) {
        this.updateChannel204ApplicationJSONAny = updateChannel204ApplicationJSONAny;
        return this;
    }
}