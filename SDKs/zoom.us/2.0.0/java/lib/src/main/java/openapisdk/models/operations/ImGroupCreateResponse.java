package openapisdk.models.operations;



public class ImGroupCreateResponse {
    public byte[] body;
    public ImGroupCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImGroupCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ImGroupCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ImGroupCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ImGroupCreate201ApplicationJson imGroupCreate201ApplicationJSONObject;
    public ImGroupCreateResponse withImGroupCreate201ApplicationJsonObject(ImGroupCreate201ApplicationJson imGroupCreate201ApplicationJSONObject) {
        this.imGroupCreate201ApplicationJSONObject = imGroupCreate201ApplicationJSONObject;
        return this;
    }
}