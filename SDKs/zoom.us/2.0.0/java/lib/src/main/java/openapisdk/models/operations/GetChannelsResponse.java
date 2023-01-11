package openapisdk.models.operations;



public class GetChannelsResponse {
    public byte[] body;
    public GetChannelsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetChannels200ApplicationJson getChannels200ApplicationJSONObject;
    public GetChannelsResponse withGetChannels200ApplicationJsonObject(GetChannels200ApplicationJson getChannels200ApplicationJSONObject) {
        this.getChannels200ApplicationJSONObject = getChannels200ApplicationJSONObject;
        return this;
    }
}