package openapisdk.models.operations;



public class PhoneUserVoiceMailsResponse {
    public byte[] body;
    public PhoneUserVoiceMailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhoneUserVoiceMailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneUserVoiceMailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PhoneUserVoiceMails200ApplicationJson phoneUserVoiceMails200ApplicationJSONObject;
    public PhoneUserVoiceMailsResponse withPhoneUserVoiceMails200ApplicationJsonObject(PhoneUserVoiceMails200ApplicationJson phoneUserVoiceMails200ApplicationJSONObject) {
        this.phoneUserVoiceMails200ApplicationJSONObject = phoneUserVoiceMails200ApplicationJSONObject;
        return this;
    }
}