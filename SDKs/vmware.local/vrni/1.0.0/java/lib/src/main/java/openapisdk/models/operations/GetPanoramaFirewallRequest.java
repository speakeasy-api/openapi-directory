package openapisdk.models.operations;



public class GetPanoramaFirewallRequest {
    public GetPanoramaFirewallPathParams pathParams;
    public GetPanoramaFirewallRequest withPathParams(GetPanoramaFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPanoramaFirewallSecurity security;
    public GetPanoramaFirewallRequest withSecurity(GetPanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}