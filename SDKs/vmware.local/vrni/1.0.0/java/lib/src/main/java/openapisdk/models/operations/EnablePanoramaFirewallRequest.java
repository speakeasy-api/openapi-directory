package openapisdk.models.operations;



public class EnablePanoramaFirewallRequest {
    public EnablePanoramaFirewallPathParams pathParams;
    public EnablePanoramaFirewallRequest withPathParams(EnablePanoramaFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnablePanoramaFirewallSecurity security;
    public EnablePanoramaFirewallRequest withSecurity(EnablePanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}