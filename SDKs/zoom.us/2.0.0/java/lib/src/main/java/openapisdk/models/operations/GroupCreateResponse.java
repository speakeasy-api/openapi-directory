package openapisdk.models.operations;



public class GroupCreateResponse {
    public byte[] body;
    public GroupCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GroupCreateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GroupCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GroupCreate201ApplicationJson groupCreate201ApplicationJSONObject;
    public GroupCreateResponse withGroupCreate201ApplicationJsonObject(GroupCreate201ApplicationJson groupCreate201ApplicationJSONObject) {
        this.groupCreate201ApplicationJSONObject = groupCreate201ApplicationJSONObject;
        return this;
    }
}