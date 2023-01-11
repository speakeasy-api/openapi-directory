package openapisdk.models.operations;



public class GetGroupSettingsResponse {
    public byte[] body;
    public GetGroupSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGroupSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getGroupSettings200ApplicationJSONOneOf;
    public GetGroupSettingsResponse withGetGroupSettings200ApplicationJsonOneOf(Object getGroupSettings200ApplicationJSONOneOf) {
        this.getGroupSettings200ApplicationJSONOneOf = getGroupSettings200ApplicationJSONOneOf;
        return this;
    }
}