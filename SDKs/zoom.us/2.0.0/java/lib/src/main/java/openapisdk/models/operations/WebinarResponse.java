package openapisdk.models.operations;



public class WebinarResponse {
    public byte[] body;
    public WebinarResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public WebinarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public WebinarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Webinar200ApplicationJson webinar200ApplicationJSONObject;
    public WebinarResponse withWebinar200ApplicationJsonObject(Webinar200ApplicationJson webinar200ApplicationJSONObject) {
        this.webinar200ApplicationJSONObject = webinar200ApplicationJSONObject;
        return this;
    }
}