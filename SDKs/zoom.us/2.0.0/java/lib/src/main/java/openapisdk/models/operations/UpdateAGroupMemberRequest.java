package openapisdk.models.operations;



public class UpdateAGroupMemberRequest {
    public UpdateAGroupMemberPathParams pathParams;
    public UpdateAGroupMemberRequest withPathParams(UpdateAGroupMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAGroupMemberRequests request;
    public UpdateAGroupMemberRequest withRequest(UpdateAGroupMemberRequests request) {
        this.request = request;
        return this;
    }
    public UpdateAGroupMemberSecurity security;
    public UpdateAGroupMemberRequest withSecurity(UpdateAGroupMemberSecurity security) {
        this.security = security;
        return this;
    }
}