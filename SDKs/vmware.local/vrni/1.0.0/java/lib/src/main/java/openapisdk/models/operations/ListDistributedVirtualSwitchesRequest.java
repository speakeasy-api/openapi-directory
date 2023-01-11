package openapisdk.models.operations;



public class ListDistributedVirtualSwitchesRequest {
    public ListDistributedVirtualSwitchesQueryParams queryParams;
    public ListDistributedVirtualSwitchesRequest withQueryParams(ListDistributedVirtualSwitchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDistributedVirtualSwitchesSecurity security;
    public ListDistributedVirtualSwitchesRequest withSecurity(ListDistributedVirtualSwitchesSecurity security) {
        this.security = security;
        return this;
    }
}