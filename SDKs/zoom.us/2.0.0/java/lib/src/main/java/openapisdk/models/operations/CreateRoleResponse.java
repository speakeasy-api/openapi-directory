package openapisdk.models.operations;



public class CreateRoleResponse {
    public byte[] body;
    public CreateRoleResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createRole200ApplicationJSONAny;
    public CreateRoleResponse withCreateRole200ApplicationJsonAny(Object createRole200ApplicationJSONAny) {
        this.createRole200ApplicationJSONAny = createRole200ApplicationJSONAny;
        return this;
    }
    public CreateRole201ApplicationJson createRole201ApplicationJSONObject;
    public CreateRoleResponse withCreateRole201ApplicationJsonObject(CreateRole201ApplicationJson createRole201ApplicationJSONObject) {
        this.createRole201ApplicationJSONObject = createRole201ApplicationJSONObject;
        return this;
    }
}