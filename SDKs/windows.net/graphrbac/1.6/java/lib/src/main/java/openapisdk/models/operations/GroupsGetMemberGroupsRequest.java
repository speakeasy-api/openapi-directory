package openapisdk.models.operations;



public class GroupsGetMemberGroupsRequest {
    public GroupsGetMemberGroupsPathParams pathParams;
    public GroupsGetMemberGroupsRequest withPathParams(GroupsGetMemberGroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsGetMemberGroupsQueryParams queryParams;
    public GroupsGetMemberGroupsRequest withQueryParams(GroupsGetMemberGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsGetMemberGroupsRequests request;
    public GroupsGetMemberGroupsRequest withRequest(GroupsGetMemberGroupsRequests request) {
        this.request = request;
        return this;
    }
}