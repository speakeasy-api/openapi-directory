package openapisdk.models.operations;



public class GetVcenterRequest {
    public GetVcenterPathParams pathParams;
    public GetVcenterRequest withPathParams(GetVcenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVcenterSecurity security;
    public GetVcenterRequest withSecurity(GetVcenterSecurity security) {
        this.security = security;
        return this;
    }
}