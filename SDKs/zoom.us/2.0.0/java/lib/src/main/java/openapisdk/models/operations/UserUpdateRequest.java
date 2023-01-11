package openapisdk.models.operations;



public class UserUpdateRequest {
    public UserUpdatePathParams pathParams;
    public UserUpdateRequest withPathParams(UserUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserUpdateQueryParams queryParams;
    public UserUpdateRequest withQueryParams(UserUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserUpdateRequests request;
    public UserUpdateRequest withRequest(UserUpdateRequests request) {
        this.request = request;
        return this;
    }
}