package openapisdk.models.operations;



public class GroupsListRequest {
    public GroupsListPathParams pathParams;
    public GroupsListRequest withPathParams(GroupsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsListQueryParams queryParams;
    public GroupsListRequest withQueryParams(GroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}