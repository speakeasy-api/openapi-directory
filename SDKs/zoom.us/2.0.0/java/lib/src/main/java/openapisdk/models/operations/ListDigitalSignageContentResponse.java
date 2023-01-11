package openapisdk.models.operations;



public class ListDigitalSignageContentResponse {
    public byte[] body;
    public ListDigitalSignageContentResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListDigitalSignageContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListDigitalSignageContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDigitalSignageContent200ApplicationJson listDigitalSignageContent200ApplicationJSONObject;
    public ListDigitalSignageContentResponse withListDigitalSignageContent200ApplicationJsonObject(ListDigitalSignageContent200ApplicationJson listDigitalSignageContent200ApplicationJSONObject) {
        this.listDigitalSignageContent200ApplicationJSONObject = listDigitalSignageContent200ApplicationJSONObject;
        return this;
    }
}