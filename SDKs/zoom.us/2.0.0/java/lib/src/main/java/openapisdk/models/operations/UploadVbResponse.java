package openapisdk.models.operations;



public class UploadVbResponse {
    public byte[] body;
    public UploadVbResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UploadVbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadVbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UploadVb201ApplicationJson uploadVB201ApplicationJSONObject;
    public UploadVbResponse withUploadVb201ApplicationJsonObject(UploadVb201ApplicationJson uploadVB201ApplicationJSONObject) {
        this.uploadVB201ApplicationJSONObject = uploadVB201ApplicationJSONObject;
        return this;
    }
}