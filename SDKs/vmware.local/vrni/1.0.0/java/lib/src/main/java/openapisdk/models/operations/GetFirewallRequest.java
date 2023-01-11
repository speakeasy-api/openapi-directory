package openapisdk.models.operations;



public class GetFirewallRequest {
    public GetFirewallPathParams pathParams;
    public GetFirewallRequest withPathParams(GetFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFirewallQueryParams queryParams;
    public GetFirewallRequest withQueryParams(GetFirewallQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFirewallSecurity security;
    public GetFirewallRequest withSecurity(GetFirewallSecurity security) {
        this.security = security;
        return this;
    }
}