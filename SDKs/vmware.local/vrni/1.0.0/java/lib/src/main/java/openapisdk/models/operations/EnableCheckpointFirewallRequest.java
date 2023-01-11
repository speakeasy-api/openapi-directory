package openapisdk.models.operations;



public class EnableCheckpointFirewallRequest {
    public EnableCheckpointFirewallPathParams pathParams;
    public EnableCheckpointFirewallRequest withPathParams(EnableCheckpointFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EnableCheckpointFirewallSecurity security;
    public EnableCheckpointFirewallRequest withSecurity(EnableCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}