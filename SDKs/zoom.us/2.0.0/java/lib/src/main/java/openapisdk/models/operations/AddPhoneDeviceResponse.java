package openapisdk.models.operations;



public class AddPhoneDeviceResponse {
    public byte[] body;
    public AddPhoneDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddPhoneDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddPhoneDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object addPhoneDevice201ApplicationJSONAny;
    public AddPhoneDeviceResponse withAddPhoneDevice201ApplicationJsonAny(Object addPhoneDevice201ApplicationJSONAny) {
        this.addPhoneDevice201ApplicationJSONAny = addPhoneDevice201ApplicationJSONAny;
        return this;
    }
}