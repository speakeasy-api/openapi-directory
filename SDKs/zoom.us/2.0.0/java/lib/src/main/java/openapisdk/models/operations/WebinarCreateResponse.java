package openapisdk.models.operations;



public class WebinarCreateResponse {
    public byte[] body;
    public WebinarCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public WebinarCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public WebinarCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarCreate201ApplicationJson webinarCreate201ApplicationJSONObject;
    public WebinarCreateResponse withWebinarCreate201ApplicationJsonObject(WebinarCreate201ApplicationJson webinarCreate201ApplicationJSONObject) {
        this.webinarCreate201ApplicationJSONObject = webinarCreate201ApplicationJSONObject;
        return this;
    }
}