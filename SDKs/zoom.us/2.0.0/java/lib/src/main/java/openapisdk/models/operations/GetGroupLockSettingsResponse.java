package openapisdk.models.operations;



public class GetGroupLockSettingsResponse {
    public byte[] body;
    public GetGroupLockSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGroupLockSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupLockSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getGroupLockSettings200ApplicationJSONOneOf;
    public GetGroupLockSettingsResponse withGetGroupLockSettings200ApplicationJsonOneOf(Object getGroupLockSettings200ApplicationJSONOneOf) {
        this.getGroupLockSettings200ApplicationJSONOneOf = getGroupLockSettings200ApplicationJSONOneOf;
        return this;
    }
}