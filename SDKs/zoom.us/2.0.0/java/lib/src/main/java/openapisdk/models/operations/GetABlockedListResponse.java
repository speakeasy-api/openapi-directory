package openapisdk.models.operations;



public class GetABlockedListResponse {
    public byte[] body;
    public GetABlockedListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetABlockedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetABlockedListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetABlockedList200ApplicationJson getABlockedList200ApplicationJSONObject;
    public GetABlockedListResponse withGetABlockedList200ApplicationJsonObject(GetABlockedList200ApplicationJson getABlockedList200ApplicationJSONObject) {
        this.getABlockedList200ApplicationJSONObject = getABlockedList200ApplicationJSONObject;
        return this;
    }
}