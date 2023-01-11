package openapisdk.models.operations;



public class PhoneUserResponse {
    public byte[] body;
    public PhoneUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhoneUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PhoneUser200ApplicationJson phoneUser200ApplicationJSONObject;
    public PhoneUserResponse withPhoneUser200ApplicationJsonObject(PhoneUser200ApplicationJson phoneUser200ApplicationJSONObject) {
        this.phoneUser200ApplicationJSONObject = phoneUser200ApplicationJSONObject;
        return this;
    }
}