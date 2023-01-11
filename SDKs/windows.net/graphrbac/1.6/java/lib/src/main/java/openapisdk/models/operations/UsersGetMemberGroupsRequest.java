package openapisdk.models.operations;



public class UsersGetMemberGroupsRequest {
    public UsersGetMemberGroupsPathParams pathParams;
    public UsersGetMemberGroupsRequest withPathParams(UsersGetMemberGroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetMemberGroupsQueryParams queryParams;
    public UsersGetMemberGroupsRequest withQueryParams(UsersGetMemberGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersGetMemberGroupsRequests request;
    public UsersGetMemberGroupsRequest withRequest(UsersGetMemberGroupsRequests request) {
        this.request = request;
        return this;
    }
}