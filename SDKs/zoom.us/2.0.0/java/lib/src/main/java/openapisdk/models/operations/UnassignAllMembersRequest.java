package openapisdk.models.operations;



public class UnassignAllMembersRequest {
    public UnassignAllMembersPathParams pathParams;
    public UnassignAllMembersRequest withPathParams(UnassignAllMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UnassignAllMembersSecurity security;
    public UnassignAllMembersRequest withSecurity(UnassignAllMembersSecurity security) {
        this.security = security;
        return this;
    }
}