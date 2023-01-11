package openapisdk.models.operations;



public class RoleMembersResponse {
    public byte[] body;
    public RoleMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public RoleMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public RoleMembersRoleMembersList roleMembersList;
    public RoleMembersResponse withRoleMembersList(RoleMembersRoleMembersList roleMembersList) {
        this.roleMembersList = roleMembersList;
        return this;
    }
    public Long statusCode;
    public RoleMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}