package openapisdk.models.operations;



public class GetVmRequest {
    public GetVmPathParams pathParams;
    public GetVmRequest withPathParams(GetVmPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVmQueryParams queryParams;
    public GetVmRequest withQueryParams(GetVmQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVmSecurity security;
    public GetVmRequest withSecurity(GetVmSecurity security) {
        this.security = security;
        return this;
    }
}