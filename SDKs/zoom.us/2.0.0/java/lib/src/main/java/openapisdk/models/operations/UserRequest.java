package openapisdk.models.operations;



public class UserRequest {
    public UserPathParams pathParams;
    public UserRequest withPathParams(UserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserQueryParams queryParams;
    public UserRequest withQueryParams(UserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}