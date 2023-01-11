package openapisdk.models.operations;



public class GetChannelResponse {
    public byte[] body;
    public GetChannelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetChannel200ApplicationJson getChannel200ApplicationJSONObject;
    public GetChannelResponse withGetChannel200ApplicationJsonObject(GetChannel200ApplicationJson getChannel200ApplicationJSONObject) {
        this.getChannel200ApplicationJSONObject = getChannel200ApplicationJSONObject;
        return this;
    }
}