package openapisdk.models.operations;



public class RoleMembersRequest {
    public RoleMembersPathParams pathParams;
    public RoleMembersRequest withPathParams(RoleMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RoleMembersQueryParams queryParams;
    public RoleMembersRequest withQueryParams(RoleMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RoleMembersSecurity security;
    public RoleMembersRequest withSecurity(RoleMembersSecurity security) {
        this.security = security;
        return this;
    }
}