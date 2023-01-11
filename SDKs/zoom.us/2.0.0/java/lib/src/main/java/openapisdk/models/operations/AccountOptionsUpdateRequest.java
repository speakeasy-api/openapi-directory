package openapisdk.models.operations;



public class AccountOptionsUpdateRequest {
    public AccountOptionsUpdatePathParams pathParams;
    public AccountOptionsUpdateRequest withPathParams(AccountOptionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccountOptionsUpdateRequests request;
    public AccountOptionsUpdateRequest withRequest(AccountOptionsUpdateRequests request) {
        this.request = request;
        return this;
    }
    public AccountOptionsUpdateSecurity security;
    public AccountOptionsUpdateRequest withSecurity(AccountOptionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}