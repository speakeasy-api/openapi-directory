package openapisdk.models.operations;



public class DisableCheckpointFirewallRequest {
    public DisableCheckpointFirewallPathParams pathParams;
    public DisableCheckpointFirewallRequest withPathParams(DisableCheckpointFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisableCheckpointFirewallSecurity security;
    public DisableCheckpointFirewallRequest withSecurity(DisableCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}