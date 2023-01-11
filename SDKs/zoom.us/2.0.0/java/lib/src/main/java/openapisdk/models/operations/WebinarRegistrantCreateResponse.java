package openapisdk.models.operations;



public class WebinarRegistrantCreateResponse {
    public byte[] body;
    public WebinarRegistrantCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarRegistrantCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarRegistrantCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public WebinarRegistrantCreate201ApplicationJson webinarRegistrantCreate201ApplicationJSONObject;
    public WebinarRegistrantCreateResponse withWebinarRegistrantCreate201ApplicationJsonObject(WebinarRegistrantCreate201ApplicationJson webinarRegistrantCreate201ApplicationJSONObject) {
        this.webinarRegistrantCreate201ApplicationJSONObject = webinarRegistrantCreate201ApplicationJSONObject;
        return this;
    }
}