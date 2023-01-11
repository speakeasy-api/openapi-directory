package openapisdk.models.operations;



public class RoleMemberDeleteRequest {
    public RoleMemberDeletePathParams pathParams;
    public RoleMemberDeleteRequest withPathParams(RoleMemberDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RoleMemberDeleteSecurity security;
    public RoleMemberDeleteRequest withSecurity(RoleMemberDeleteSecurity security) {
        this.security = security;
        return this;
    }
}