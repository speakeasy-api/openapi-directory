package openapisdk.models.operations;



public class AddInternalNumbersResponse {
    public byte[] body;
    public AddInternalNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddInternalNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddInternalNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddInternalNumbers201ApplicationJson addInternalNumbers201ApplicationJSONObject;
    public AddInternalNumbersResponse withAddInternalNumbers201ApplicationJsonObject(AddInternalNumbers201ApplicationJson addInternalNumbers201ApplicationJSONObject) {
        this.addInternalNumbers201ApplicationJSONObject = addInternalNumbers201ApplicationJSONObject;
        return this;
    }
}