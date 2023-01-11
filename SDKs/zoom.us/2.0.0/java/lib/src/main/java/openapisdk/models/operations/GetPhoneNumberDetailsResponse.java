package openapisdk.models.operations;



public class GetPhoneNumberDetailsResponse {
    public byte[] body;
    public GetPhoneNumberDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPhoneNumberDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPhoneNumberDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPhoneNumberDetails200ApplicationJson getPhoneNumberDetails200ApplicationJSONObject;
    public GetPhoneNumberDetailsResponse withGetPhoneNumberDetails200ApplicationJsonObject(GetPhoneNumberDetails200ApplicationJson getPhoneNumberDetails200ApplicationJSONObject) {
        this.getPhoneNumberDetails200ApplicationJSONObject = getPhoneNumberDetails200ApplicationJSONObject;
        return this;
    }
}