package openapisdk.models.operations;



public class EnableVcenterRequest {
    public EnableVcenterPathParams pathParams;
    public EnableVcenterRequest withPathParams(EnableVcenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableVcenterSecurity security;
    public EnableVcenterRequest withSecurity(EnableVcenterSecurity security) {
        this.security = security;
        return this;
    }
}