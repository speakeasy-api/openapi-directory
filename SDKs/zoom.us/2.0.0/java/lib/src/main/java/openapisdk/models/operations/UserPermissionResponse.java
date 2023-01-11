package openapisdk.models.operations;



public class UserPermissionResponse {
    public byte[] body;
    public UserPermissionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserPermission200ApplicationJson userPermission200ApplicationJSONObject;
    public UserPermissionResponse withUserPermission200ApplicationJsonObject(UserPermission200ApplicationJson userPermission200ApplicationJSONObject) {
        this.userPermission200ApplicationJSONObject = userPermission200ApplicationJSONObject;
        return this;
    }
}