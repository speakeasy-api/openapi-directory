package openapisdk.models.operations;



public class JoinChannelResponse {
    public byte[] body;
    public JoinChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public JoinChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public JoinChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public JoinChannel201ApplicationJson joinChannel201ApplicationJSONObject;
    public JoinChannelResponse withJoinChannel201ApplicationJsonObject(JoinChannel201ApplicationJson joinChannel201ApplicationJSONObject) {
        this.joinChannel201ApplicationJSONObject = joinChannel201ApplicationJSONObject;
        return this;
    }
}