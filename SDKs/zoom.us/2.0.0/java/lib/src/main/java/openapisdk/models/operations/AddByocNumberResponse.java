package openapisdk.models.operations;



public class AddByocNumberResponse {
    public byte[] body;
    public AddByocNumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddByocNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddByocNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddByocNumber201ApplicationJson addBYOCNumber201ApplicationJSONObject;
    public AddByocNumberResponse withAddByocNumber201ApplicationJsonObject(AddByocNumber201ApplicationJson addBYOCNumber201ApplicationJSONObject) {
        this.addBYOCNumber201ApplicationJSONObject = addBYOCNumber201ApplicationJSONObject;
        return this;
    }
}