package openapisdk.models.operations;



public class UsersListRequest {
    public UsersListPathParams pathParams;
    public UsersListRequest withPathParams(UsersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersListQueryParams queryParams;
    public UsersListRequest withQueryParams(UsersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}