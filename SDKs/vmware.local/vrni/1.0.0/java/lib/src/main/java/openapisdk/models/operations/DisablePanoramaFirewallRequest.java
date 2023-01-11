package openapisdk.models.operations;



public class DisablePanoramaFirewallRequest {
    public DisablePanoramaFirewallPathParams pathParams;
    public DisablePanoramaFirewallRequest withPathParams(DisablePanoramaFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisablePanoramaFirewallSecurity security;
    public DisablePanoramaFirewallRequest withSecurity(DisablePanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}