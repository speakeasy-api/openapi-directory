package openapisdk.models.operations;



public class UsersCreateRequest {
    public UsersCreatePathParams pathParams;
    public UsersCreateRequest withPathParams(UsersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersCreateQueryParams queryParams;
    public UsersCreateRequest withQueryParams(UsersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersCreateRequests request;
    public UsersCreateRequest withRequest(UsersCreateRequests request) {
        this.request = request;
        return this;
    }
}