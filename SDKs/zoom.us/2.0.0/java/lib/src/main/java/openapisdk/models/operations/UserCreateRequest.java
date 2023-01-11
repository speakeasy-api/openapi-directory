package openapisdk.models.operations;



public class UserCreateRequest {
    public UserCreateRequests request;
    public UserCreateRequest withRequest(UserCreateRequests request) {
        this.request = request;
        return this;
    }
    public UserCreateSecurity security;
    public UserCreateRequest withSecurity(UserCreateSecurity security) {
        this.security = security;
        return this;
    }
}