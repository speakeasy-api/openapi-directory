package openapisdk.models.operations;



public class ImChatSessionsResponse {
    public byte[] body;
    public ImChatSessionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImChatSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImChatSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImChatSessions200ApplicationJson imChatSessions200ApplicationJSONObject;
    public ImChatSessionsResponse withImChatSessions200ApplicationJsonObject(ImChatSessions200ApplicationJson imChatSessions200ApplicationJSONObject) {
        this.imChatSessions200ApplicationJSONObject = imChatSessions200ApplicationJSONObject;
        return this;
    }
}