package openapisdk.models.operations;



public class RolesResponse {
    public byte[] body;
    public RolesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RolesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RolesRoleList roleList;
    public RolesResponse withRoleList(RolesRoleList roleList) {
        this.roleList = roleList;
        return this;
    }
    public Long statusCode;
    public RolesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}