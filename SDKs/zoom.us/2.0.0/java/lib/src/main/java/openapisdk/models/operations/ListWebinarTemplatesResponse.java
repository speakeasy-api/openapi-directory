package openapisdk.models.operations;



public class ListWebinarTemplatesResponse {
    public byte[] body;
    public ListWebinarTemplatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListWebinarTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWebinarTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListWebinarTemplates200ApplicationJson listWebinarTemplates200ApplicationJSONObject;
    public ListWebinarTemplatesResponse withListWebinarTemplates200ApplicationJsonObject(ListWebinarTemplates200ApplicationJson listWebinarTemplates200ApplicationJSONObject) {
        this.listWebinarTemplates200ApplicationJSONObject = listWebinarTemplates200ApplicationJSONObject;
        return this;
    }
}