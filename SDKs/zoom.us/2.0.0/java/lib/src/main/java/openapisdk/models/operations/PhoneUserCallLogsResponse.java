package openapisdk.models.operations;



public class PhoneUserCallLogsResponse {
    public byte[] body;
    public PhoneUserCallLogsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PhoneUserCallLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PhoneUserCallLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PhoneUserCallLogs200ApplicationJson phoneUserCallLogs200ApplicationJSONObject;
    public PhoneUserCallLogsResponse withPhoneUserCallLogs200ApplicationJsonObject(PhoneUserCallLogs200ApplicationJson phoneUserCallLogs200ApplicationJSONObject) {
        this.phoneUserCallLogs200ApplicationJSONObject = phoneUserCallLogs200ApplicationJSONObject;
        return this;
    }
}