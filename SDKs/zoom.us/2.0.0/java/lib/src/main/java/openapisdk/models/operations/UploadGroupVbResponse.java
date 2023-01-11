package openapisdk.models.operations;



public class UploadGroupVbResponse {
    public byte[] body;
    public UploadGroupVbResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UploadGroupVbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadGroupVbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UploadGroupVb201ApplicationJson uploadGroupVB201ApplicationJSONObject;
    public UploadGroupVbResponse withUploadGroupVb201ApplicationJsonObject(UploadGroupVb201ApplicationJson uploadGroupVB201ApplicationJSONObject) {
        this.uploadGroupVB201ApplicationJSONObject = uploadGroupVB201ApplicationJSONObject;
        return this;
    }
}