package openapisdk.models.operations;



public class PhoneUserRequest {
    public PhoneUserPathParams pathParams;
    public PhoneUserRequest withPathParams(PhoneUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PhoneUserSecurity security;
    public PhoneUserRequest withSecurity(PhoneUserSecurity security) {
        this.security = security;
        return this;
    }
}