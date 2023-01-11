package openapisdk.models.operations;



public class InviteChannelMembersRequest {
    public InviteChannelMembersPathParams pathParams;
    public InviteChannelMembersRequest withPathParams(InviteChannelMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InviteChannelMembersRequests request;
    public InviteChannelMembersRequest withRequest(InviteChannelMembersRequests request) {
        this.request = request;
        return this;
    }
    public InviteChannelMembersSecurity security;
    public InviteChannelMembersRequest withSecurity(InviteChannelMembersSecurity security) {
        this.security = security;
        return this;
    }
}