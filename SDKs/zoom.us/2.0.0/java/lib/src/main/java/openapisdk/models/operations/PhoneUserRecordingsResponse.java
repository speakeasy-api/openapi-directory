package openapisdk.models.operations;



public class PhoneUserRecordingsResponse {
    public byte[] body;
    public PhoneUserRecordingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhoneUserRecordingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneUserRecordingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PhoneUserRecordings200ApplicationJson phoneUserRecordings200ApplicationJSONObject;
    public PhoneUserRecordingsResponse withPhoneUserRecordings200ApplicationJsonObject(PhoneUserRecordings200ApplicationJson phoneUserRecordings200ApplicationJSONObject) {
        this.phoneUserRecordings200ApplicationJSONObject = phoneUserRecordings200ApplicationJSONObject;
        return this;
    }
}