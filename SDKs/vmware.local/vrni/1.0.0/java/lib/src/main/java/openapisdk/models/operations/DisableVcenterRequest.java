package openapisdk.models.operations;



public class DisableVcenterRequest {
    public DisableVcenterPathParams pathParams;
    public DisableVcenterRequest withPathParams(DisableVcenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableVcenterSecurity security;
    public DisableVcenterRequest withSecurity(DisableVcenterSecurity security) {
        this.security = security;
        return this;
    }
}