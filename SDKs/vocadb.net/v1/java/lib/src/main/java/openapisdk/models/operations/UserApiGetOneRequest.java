package openapisdk.models.operations;



public class UserApiGetOneRequest {
    public UserApiGetOnePathParams pathParams;
    public UserApiGetOneRequest withPathParams(UserApiGetOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserApiGetOneQueryParams queryParams;
    public UserApiGetOneRequest withQueryParams(UserApiGetOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}