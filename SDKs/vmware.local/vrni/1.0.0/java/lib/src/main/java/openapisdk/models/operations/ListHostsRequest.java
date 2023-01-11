package openapisdk.models.operations;



public class ListHostsRequest {
    public ListHostsQueryParams queryParams;
    public ListHostsRequest withQueryParams(ListHostsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHostsSecurity security;
    public ListHostsRequest withSecurity(ListHostsSecurity security) {
        this.security = security;
        return this;
    }
}