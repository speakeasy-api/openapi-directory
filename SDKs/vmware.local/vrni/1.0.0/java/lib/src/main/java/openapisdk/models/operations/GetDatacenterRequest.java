package openapisdk.models.operations;



public class GetDatacenterRequest {
    public GetDatacenterPathParams pathParams;
    public GetDatacenterRequest withPathParams(GetDatacenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDatacenterQueryParams queryParams;
    public GetDatacenterRequest withQueryParams(GetDatacenterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDatacenterSecurity security;
    public GetDatacenterRequest withSecurity(GetDatacenterSecurity security) {
        this.security = security;
        return this;
    }
}