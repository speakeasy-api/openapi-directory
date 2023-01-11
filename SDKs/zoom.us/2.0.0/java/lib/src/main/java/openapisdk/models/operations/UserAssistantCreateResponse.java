package openapisdk.models.operations;



public class UserAssistantCreateResponse {
    public byte[] body;
    public UserAssistantCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserAssistantCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UserAssistantCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UserAssistantCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserAssistantCreate201ApplicationJson userAssistantCreate201ApplicationJSONObject;
    public UserAssistantCreateResponse withUserAssistantCreate201ApplicationJsonObject(UserAssistantCreate201ApplicationJson userAssistantCreate201ApplicationJSONObject) {
        this.userAssistantCreate201ApplicationJSONObject = userAssistantCreate201ApplicationJSONObject;
        return this;
    }
}