package openapisdk.models.operations;



public class GetChatMessagesResponse {
    public byte[] body;
    public GetChatMessagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChatMessagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChatMessagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetChatMessages200ApplicationJson getChatMessages200ApplicationJSONObject;
    public GetChatMessagesResponse withGetChatMessages200ApplicationJsonObject(GetChatMessages200ApplicationJson getChatMessages200ApplicationJSONObject) {
        this.getChatMessages200ApplicationJSONObject = getChatMessages200ApplicationJSONObject;
        return this;
    }
}