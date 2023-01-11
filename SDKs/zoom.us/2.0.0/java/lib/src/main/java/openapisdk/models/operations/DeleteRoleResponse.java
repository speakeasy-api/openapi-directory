package openapisdk.models.operations;



public class DeleteRoleResponse {
    public byte[] body;
    public DeleteRoleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteRole204ApplicationJSONObject;
    public DeleteRoleResponse withDeleteRole204ApplicationJsonObject(java.util.Map<String, Object> deleteRole204ApplicationJSONObject) {
        this.deleteRole204ApplicationJSONObject = deleteRole204ApplicationJSONObject;
        return this;
    }
}