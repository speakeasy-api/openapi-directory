package openapisdk.models.operations;



public class UpdateAccountOwnerRequest {
    public UpdateAccountOwnerPathParams pathParams;
    public UpdateAccountOwnerRequest withPathParams(UpdateAccountOwnerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateAccountOwnerRequests request;
    public UpdateAccountOwnerRequest withRequest(UpdateAccountOwnerRequests request) {
        this.request = request;
        return this;
    }
    public UpdateAccountOwnerSecurity security;
    public UpdateAccountOwnerRequest withSecurity(UpdateAccountOwnerSecurity security) {
        this.security = security;
        return this;
    }
}