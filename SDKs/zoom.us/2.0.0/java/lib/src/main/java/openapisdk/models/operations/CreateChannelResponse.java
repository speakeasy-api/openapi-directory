package openapisdk.models.operations;



public class CreateChannelResponse {
    public byte[] body;
    public CreateChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateChannel201ApplicationJson createChannel201ApplicationJSONObject;
    public CreateChannelResponse withCreateChannel201ApplicationJsonObject(CreateChannel201ApplicationJson createChannel201ApplicationJSONObject) {
        this.createChannel201ApplicationJSONObject = createChannel201ApplicationJSONObject;
        return this;
    }
}