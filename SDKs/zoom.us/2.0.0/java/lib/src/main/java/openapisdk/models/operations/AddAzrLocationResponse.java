package openapisdk.models.operations;



public class AddAzrLocationResponse {
    public byte[] body;
    public AddAzrLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddAzrLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddAzrLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddAzrLocation200ApplicationJson addAZRLocation200ApplicationJSONObject;
    public AddAzrLocationResponse withAddAzrLocation200ApplicationJsonObject(AddAzrLocation200ApplicationJson addAZRLocation200ApplicationJSONObject) {
        this.addAZRLocation200ApplicationJSONObject = addAZRLocation200ApplicationJSONObject;
        return this;
    }
}