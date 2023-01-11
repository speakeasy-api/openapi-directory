package openapisdk.models.operations;



public class DeleteVcenterRequest {
    public DeleteVcenterPathParams pathParams;
    public DeleteVcenterRequest withPathParams(DeleteVcenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVcenterSecurity security;
    public DeleteVcenterRequest withSecurity(DeleteVcenterSecurity security) {
        this.security = security;
        return this;
    }
}