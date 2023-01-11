package openapisdk.models.operations;



public class GetDistributedVirtualPortgroupRequest {
    public GetDistributedVirtualPortgroupPathParams pathParams;
    public GetDistributedVirtualPortgroupRequest withPathParams(GetDistributedVirtualPortgroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistributedVirtualPortgroupQueryParams queryParams;
    public GetDistributedVirtualPortgroupRequest withQueryParams(GetDistributedVirtualPortgroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDistributedVirtualPortgroupSecurity security;
    public GetDistributedVirtualPortgroupRequest withSecurity(GetDistributedVirtualPortgroupSecurity security) {
        this.security = security;
        return this;
    }
}