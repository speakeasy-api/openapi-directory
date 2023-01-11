package openapisdk.models.operations;



public class AddARoomResponse {
    public byte[] body;
    public AddARoomResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddARoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddARoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddARoom201ApplicationJson addARoom201ApplicationJSONObject;
    public AddARoomResponse withAddARoom201ApplicationJsonObject(AddARoom201ApplicationJson addARoom201ApplicationJSONObject) {
        this.addARoom201ApplicationJSONObject = addARoom201ApplicationJSONObject;
        return this;
    }
}