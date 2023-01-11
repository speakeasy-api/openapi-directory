package openapisdk.models.operations;



public class ImGroupResponse {
    public byte[] body;
    public ImGroupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImGroup200ApplicationJson imGroup200ApplicationJSONObject;
    public ImGroupResponse withImGroup200ApplicationJsonObject(ImGroup200ApplicationJson imGroup200ApplicationJSONObject) {
        this.imGroup200ApplicationJSONObject = imGroup200ApplicationJSONObject;
        return this;
    }
}