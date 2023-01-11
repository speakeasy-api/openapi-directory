package openapisdk.models.operations;



public class AddAutoReceptionistResponse {
    public byte[] body;
    public AddAutoReceptionistResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddAutoReceptionistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddAutoReceptionistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddAutoReceptionist201ApplicationJson addAutoReceptionist201ApplicationJSONObject;
    public AddAutoReceptionistResponse withAddAutoReceptionist201ApplicationJsonObject(AddAutoReceptionist201ApplicationJson addAutoReceptionist201ApplicationJSONObject) {
        this.addAutoReceptionist201ApplicationJSONObject = addAutoReceptionist201ApplicationJSONObject;
        return this;
    }
}