package openapisdk.models.operations;



public class DeleteTierRequest {
    public DeleteTierPathParams pathParams;
    public DeleteTierRequest withPathParams(DeleteTierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTierSecurity security;
    public DeleteTierRequest withSecurity(DeleteTierSecurity security) {
        this.security = security;
        return this;
    }
}