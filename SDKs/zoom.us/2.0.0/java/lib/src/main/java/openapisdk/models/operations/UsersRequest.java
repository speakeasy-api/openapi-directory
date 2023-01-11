package openapisdk.models.operations;



public class UsersRequest {
    public UsersQueryParams queryParams;
    public UsersRequest withQueryParams(UsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UsersSecurity security;
    public UsersRequest withSecurity(UsersSecurity security) {
        this.security = security;
        return this;
    }
}