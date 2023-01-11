package openapisdk.models.operations;



public class ImChatMessagesResponse {
    public byte[] body;
    public ImChatMessagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImChatMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImChatMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImChatMessages200ApplicationJson imChatMessages200ApplicationJSONObject;
    public ImChatMessagesResponse withImChatMessages200ApplicationJsonObject(ImChatMessages200ApplicationJson imChatMessages200ApplicationJSONObject) {
        this.imChatMessages200ApplicationJSONObject = imChatMessages200ApplicationJSONObject;
        return this;
    }
}