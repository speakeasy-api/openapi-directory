package openapisdk.models.operations;



public class SendaChatMessageResponse {
    public byte[] body;
    public SendaChatMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SendaChatMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SendaChatMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SendaChatMessage201ApplicationJson sendaChatMessage201ApplicationJSONObject;
    public SendaChatMessageResponse withSendaChatMessage201ApplicationJsonObject(SendaChatMessage201ApplicationJson sendaChatMessage201ApplicationJSONObject) {
        this.sendaChatMessage201ApplicationJSONObject = sendaChatMessage201ApplicationJSONObject;
        return this;
    }
}