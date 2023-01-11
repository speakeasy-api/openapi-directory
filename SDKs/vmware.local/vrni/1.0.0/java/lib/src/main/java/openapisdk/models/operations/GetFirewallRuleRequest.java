package openapisdk.models.operations;



public class GetFirewallRuleRequest {
    public GetFirewallRulePathParams pathParams;
    public GetFirewallRuleRequest withPathParams(GetFirewallRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetFirewallRuleQueryParams queryParams;
    public GetFirewallRuleRequest withQueryParams(GetFirewallRuleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFirewallRuleSecurity security;
    public GetFirewallRuleRequest withSecurity(GetFirewallRuleSecurity security) {
        this.security = security;
        return this;
    }
}