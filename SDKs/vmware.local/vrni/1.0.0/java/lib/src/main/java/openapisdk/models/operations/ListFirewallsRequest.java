package openapisdk.models.operations;



public class ListFirewallsRequest {
    public ListFirewallsQueryParams queryParams;
    public ListFirewallsRequest withQueryParams(ListFirewallsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallsSecurity security;
    public ListFirewallsRequest withSecurity(ListFirewallsSecurity security) {
        this.security = security;
        return this;
    }
}