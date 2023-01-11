package openapisdk.models.operations;



public class AddRoleMembersResponse {
    public AddRoleMembers201ApplicationJson addRoleMembers201ApplicationJSONObject;
    public AddRoleMembersResponse withAddRoleMembers201ApplicationJsonObject(AddRoleMembers201ApplicationJson addRoleMembers201ApplicationJSONObject) {
        this.addRoleMembers201ApplicationJSONObject = addRoleMembers201ApplicationJSONObject;
        return this;
    }
    public byte[] body;
    public AddRoleMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddRoleMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddRoleMembersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddRoleMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}