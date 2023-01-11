package openapisdk.models.operations;



public class ListFirewallRulesRequest {
    public ListFirewallRulesQueryParams queryParams;
    public ListFirewallRulesRequest withQueryParams(ListFirewallRulesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFirewallRulesSecurity security;
    public ListFirewallRulesRequest withSecurity(ListFirewallRulesSecurity security) {
        this.security = security;
        return this;
    }
}