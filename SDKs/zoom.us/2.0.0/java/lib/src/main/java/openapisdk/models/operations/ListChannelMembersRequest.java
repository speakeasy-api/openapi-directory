package openapisdk.models.operations;



public class ListChannelMembersRequest {
    public ListChannelMembersPathParams pathParams;
    public ListChannelMembersRequest withPathParams(ListChannelMembersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListChannelMembersQueryParams queryParams;
    public ListChannelMembersRequest withQueryParams(ListChannelMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChannelMembersSecurity security;
    public ListChannelMembersRequest withSecurity(ListChannelMembersSecurity security) {
        this.security = security;
        return this;
    }
}