package openapisdk.models.operations;



public class GetLiveStreamDetailsResponse {
    public byte[] body;
    public GetLiveStreamDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLiveStreamDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLiveStreamDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLiveStreamDetails200ApplicationJson getLiveStreamDetails200ApplicationJSONObject;
    public GetLiveStreamDetailsResponse withGetLiveStreamDetails200ApplicationJsonObject(GetLiveStreamDetails200ApplicationJson getLiveStreamDetails200ApplicationJSONObject) {
        this.getLiveStreamDetails200ApplicationJSONObject = getLiveStreamDetails200ApplicationJSONObject;
        return this;
    }
}