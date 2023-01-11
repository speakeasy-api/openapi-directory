package openapisdk.models.operations;



public class GetFirewallRuleResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFirewallRuleResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseFirewallRule baseFirewallRule;
    public GetFirewallRuleResponse withBaseFirewallRule(openapisdk.models.shared.BaseFirewallRule baseFirewallRule) {
        this.baseFirewallRule = baseFirewallRule;
        return this;
    }
    public String contentType;
    public GetFirewallRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFirewallRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}