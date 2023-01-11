package openapisdk.models.operations;



public class GetASiteResponse {
    public byte[] body;
    public GetASiteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetASiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetASiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetASite200ApplicationJson getASite200ApplicationJSONObject;
    public GetASiteResponse withGetASite200ApplicationJsonObject(GetASite200ApplicationJson getASite200ApplicationJSONObject) {
        this.getASite200ApplicationJSONObject = getASite200ApplicationJSONObject;
        return this;
    }
}