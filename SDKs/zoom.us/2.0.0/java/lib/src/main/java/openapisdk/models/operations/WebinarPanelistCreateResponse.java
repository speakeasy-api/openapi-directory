package openapisdk.models.operations;



public class WebinarPanelistCreateResponse {
    public byte[] body;
    public WebinarPanelistCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarPanelistCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarPanelistCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarPanelistCreate201ApplicationJson webinarPanelistCreate201ApplicationJSONObject;
    public WebinarPanelistCreateResponse withWebinarPanelistCreate201ApplicationJsonObject(WebinarPanelistCreate201ApplicationJson webinarPanelistCreate201ApplicationJSONObject) {
        this.webinarPanelistCreate201ApplicationJSONObject = webinarPanelistCreate201ApplicationJSONObject;
        return this;
    }
}