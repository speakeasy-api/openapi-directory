package openapisdk.models.operations;



public class GroupsIsMemberOfRequest {
    public GroupsIsMemberOfPathParams pathParams;
    public GroupsIsMemberOfRequest withPathParams(GroupsIsMemberOfPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsIsMemberOfQueryParams queryParams;
    public GroupsIsMemberOfRequest withQueryParams(GroupsIsMemberOfQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsIsMemberOfRequests request;
    public GroupsIsMemberOfRequest withRequest(GroupsIsMemberOfRequests request) {
        this.request = request;
        return this;
    }
}