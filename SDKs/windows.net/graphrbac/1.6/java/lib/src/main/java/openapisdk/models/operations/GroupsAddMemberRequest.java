package openapisdk.models.operations;



public class GroupsAddMemberRequest {
    public GroupsAddMemberPathParams pathParams;
    public GroupsAddMemberRequest withPathParams(GroupsAddMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsAddMemberQueryParams queryParams;
    public GroupsAddMemberRequest withQueryParams(GroupsAddMemberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsAddMemberRequests request;
    public GroupsAddMemberRequest withRequest(GroupsAddMemberRequests request) {
        this.request = request;
        return this;
    }
}