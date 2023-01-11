package openapisdk.models.operations;



public class GetFirewallResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFirewallResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public openapisdk.models.shared.BaseFirewallRule baseFirewallRule;
    public GetFirewallResponse withBaseFirewallRule(openapisdk.models.shared.BaseFirewallRule baseFirewallRule) {
        this.baseFirewallRule = baseFirewallRule;
        return this;
    }
    public String contentType;
    public GetFirewallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetFirewallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}