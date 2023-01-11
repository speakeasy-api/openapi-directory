package openapisdk.models.operations;



public class UsersUpdateRequest {
    public UsersUpdatePathParams pathParams;
    public UsersUpdateRequest withPathParams(UsersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersUpdateQueryParams queryParams;
    public UsersUpdateRequest withQueryParams(UsersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersUpdateRequests request;
    public UsersUpdateRequest withRequest(UsersUpdateRequests request) {
        this.request = request;
        return this;
    }
}