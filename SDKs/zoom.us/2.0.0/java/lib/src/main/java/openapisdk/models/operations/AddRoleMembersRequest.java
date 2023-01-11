package openapisdk.models.operations;



public class AddRoleMembersRequest {
    public AddRoleMembersPathParams pathParams;
    public AddRoleMembersRequest withPathParams(AddRoleMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddRoleMembersRequests request;
    public AddRoleMembersRequest withRequest(AddRoleMembersRequests request) {
        this.request = request;
        return this;
    }
    public AddRoleMembersSecurity security;
    public AddRoleMembersRequest withSecurity(AddRoleMembersSecurity security) {
        this.security = security;
        return this;
    }
}