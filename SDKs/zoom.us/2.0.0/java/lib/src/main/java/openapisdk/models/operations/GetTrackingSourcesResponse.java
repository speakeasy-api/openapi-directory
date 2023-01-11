package openapisdk.models.operations;



public class GetTrackingSourcesResponse {
    public byte[] body;
    public GetTrackingSourcesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTrackingSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackingSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTrackingSources200ApplicationJson getTrackingSources200ApplicationJSONObject;
    public GetTrackingSourcesResponse withGetTrackingSources200ApplicationJsonObject(GetTrackingSources200ApplicationJson getTrackingSources200ApplicationJSONObject) {
        this.getTrackingSources200ApplicationJSONObject = getTrackingSources200ApplicationJSONObject;
        return this;
    }
}