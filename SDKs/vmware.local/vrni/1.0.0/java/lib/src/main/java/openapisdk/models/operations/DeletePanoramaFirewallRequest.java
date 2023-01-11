package openapisdk.models.operations;



public class DeletePanoramaFirewallRequest {
    public DeletePanoramaFirewallPathParams pathParams;
    public DeletePanoramaFirewallRequest withPathParams(DeletePanoramaFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePanoramaFirewallSecurity security;
    public DeletePanoramaFirewallRequest withSecurity(DeletePanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}