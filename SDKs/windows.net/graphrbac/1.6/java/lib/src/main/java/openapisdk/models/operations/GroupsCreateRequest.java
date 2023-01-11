package openapisdk.models.operations;



public class GroupsCreateRequest {
    public GroupsCreatePathParams pathParams;
    public GroupsCreateRequest withPathParams(GroupsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GroupsCreateQueryParams queryParams;
    public GroupsCreateRequest withQueryParams(GroupsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GroupsCreateRequests request;
    public GroupsCreateRequest withRequest(GroupsCreateRequests request) {
        this.request = request;
        return this;
    }
}