package openapisdk.models.operations;



public class GetVcenterManagerRequest {
    public GetVcenterManagerPathParams pathParams;
    public GetVcenterManagerRequest withPathParams(GetVcenterManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVcenterManagerQueryParams queryParams;
    public GetVcenterManagerRequest withQueryParams(GetVcenterManagerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetVcenterManagerSecurity security;
    public GetVcenterManagerRequest withSecurity(GetVcenterManagerSecurity security) {
        this.security = security;
        return this;
    }
}