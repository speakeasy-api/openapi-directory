package openapisdk.models.operations;



public class GetVmknicRequest {
    public GetVmknicPathParams pathParams;
    public GetVmknicRequest withPathParams(GetVmknicPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVmknicQueryParams queryParams;
    public GetVmknicRequest withQueryParams(GetVmknicQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVmknicSecurity security;
    public GetVmknicRequest withSecurity(GetVmknicSecurity security) {
        this.security = security;
        return this;
    }
}