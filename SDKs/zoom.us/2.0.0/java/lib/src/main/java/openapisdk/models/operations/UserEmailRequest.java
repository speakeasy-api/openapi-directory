package openapisdk.models.operations;



public class UserEmailRequest {
    public UserEmailQueryParams queryParams;
    public UserEmailRequest withQueryParams(UserEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UserEmailSecurity security;
    public UserEmailRequest withSecurity(UserEmailSecurity security) {
        this.security = security;
        return this;
    }
}