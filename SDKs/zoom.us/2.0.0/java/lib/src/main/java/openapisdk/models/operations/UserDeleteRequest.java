package openapisdk.models.operations;



public class UserDeleteRequest {
    public UserDeletePathParams pathParams;
    public UserDeleteRequest withPathParams(UserDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserDeleteQueryParams queryParams;
    public UserDeleteRequest withQueryParams(UserDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}