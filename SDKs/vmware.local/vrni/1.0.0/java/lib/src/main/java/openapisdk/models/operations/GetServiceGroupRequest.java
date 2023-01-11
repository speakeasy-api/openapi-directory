package openapisdk.models.operations;



public class GetServiceGroupRequest {
    public GetServiceGroupPathParams pathParams;
    public GetServiceGroupRequest withPathParams(GetServiceGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetServiceGroupQueryParams queryParams;
    public GetServiceGroupRequest withQueryParams(GetServiceGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetServiceGroupSecurity security;
    public GetServiceGroupRequest withSecurity(GetServiceGroupSecurity security) {
        this.security = security;
        return this;
    }
}