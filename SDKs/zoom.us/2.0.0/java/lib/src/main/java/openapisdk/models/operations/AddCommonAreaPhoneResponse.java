package openapisdk.models.operations;



public class AddCommonAreaPhoneResponse {
    public byte[] body;
    public AddCommonAreaPhoneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddCommonAreaPhoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddCommonAreaPhoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddCommonAreaPhone201ApplicationJson addCommonAreaPhone201ApplicationJSONObject;
    public AddCommonAreaPhoneResponse withAddCommonAreaPhone201ApplicationJsonObject(AddCommonAreaPhone201ApplicationJson addCommonAreaPhone201ApplicationJSONObject) {
        this.addCommonAreaPhone201ApplicationJSONObject = addCommonAreaPhone201ApplicationJSONObject;
        return this;
    }
}