package openapisdk.models.operations;



public class UploadVBuserResponse {
    public byte[] body;
    public UploadVBuserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UploadVBuserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadVBuserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UploadVBuser201ApplicationJson uploadVBuser201ApplicationJSONObject;
    public UploadVBuserResponse withUploadVBuser201ApplicationJsonObject(UploadVBuser201ApplicationJson uploadVBuser201ApplicationJSONObject) {
        this.uploadVBuser201ApplicationJSONObject = uploadVBuser201ApplicationJSONObject;
        return this;
    }
}