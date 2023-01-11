package openapisdk.models.operations;



public class UsersGetRequest {
    public UsersGetPathParams pathParams;
    public UsersGetRequest withPathParams(UsersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UsersGetQueryParams queryParams;
    public UsersGetRequest withQueryParams(UsersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}