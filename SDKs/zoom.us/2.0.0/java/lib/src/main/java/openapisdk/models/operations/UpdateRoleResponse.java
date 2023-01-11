package openapisdk.models.operations;



public class UpdateRoleResponse {
    public byte[] body;
    public UpdateRoleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateRole200ApplicationJSONAny;
    public UpdateRoleResponse withUpdateRole200ApplicationJsonAny(Object updateRole200ApplicationJSONAny) {
        this.updateRole200ApplicationJSONAny = updateRole200ApplicationJSONAny;
        return this;
    }
}