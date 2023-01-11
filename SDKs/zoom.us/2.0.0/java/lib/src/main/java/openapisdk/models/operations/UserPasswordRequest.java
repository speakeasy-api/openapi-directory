package openapisdk.models.operations;



public class UserPasswordRequest {
    public UserPasswordPathParams pathParams;
    public UserPasswordRequest withPathParams(UserPasswordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UserPasswordRequests request;
    public UserPasswordRequest withRequest(UserPasswordRequests request) {
        this.request = request;
        return this;
    }
}