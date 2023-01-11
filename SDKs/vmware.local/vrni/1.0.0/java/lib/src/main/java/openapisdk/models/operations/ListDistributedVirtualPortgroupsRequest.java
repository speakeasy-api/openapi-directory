package openapisdk.models.operations;



public class ListDistributedVirtualPortgroupsRequest {
    public ListDistributedVirtualPortgroupsQueryParams queryParams;
    public ListDistributedVirtualPortgroupsRequest withQueryParams(ListDistributedVirtualPortgroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDistributedVirtualPortgroupsSecurity security;
    public ListDistributedVirtualPortgroupsRequest withSecurity(ListDistributedVirtualPortgroupsSecurity security) {
        this.security = security;
        return this;
    }
}