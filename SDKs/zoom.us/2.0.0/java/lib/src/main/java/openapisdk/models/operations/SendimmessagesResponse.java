package openapisdk.models.operations;



public class SendimmessagesResponse {
    public byte[] body;
    public SendimmessagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SendimmessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendimmessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Sendimmessages201ApplicationJson sendimmessages201ApplicationJSONObject;
    public SendimmessagesResponse withSendimmessages201ApplicationJsonObject(Sendimmessages201ApplicationJson sendimmessages201ApplicationJSONObject) {
        this.sendimmessages201ApplicationJSONObject = sendimmessages201ApplicationJSONObject;
        return this;
    }
}