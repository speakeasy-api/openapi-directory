package openapisdk.models.operations;



public class GetUserLevelChannelResponse {
    public byte[] body;
    public GetUserLevelChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUserLevelChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserLevelChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUserLevelChannel200ApplicationJson getUserLevelChannel200ApplicationJSONObject;
    public GetUserLevelChannelResponse withGetUserLevelChannel200ApplicationJsonObject(GetUserLevelChannel200ApplicationJson getUserLevelChannel200ApplicationJSONObject) {
        this.getUserLevelChannel200ApplicationJSONObject = getUserLevelChannel200ApplicationJSONObject;
        return this;
    }
}