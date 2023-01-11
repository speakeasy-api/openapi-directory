package openapisdk.models.operations;



public class DeleteCheckpointFirewallRequest {
    public DeleteCheckpointFirewallPathParams pathParams;
    public DeleteCheckpointFirewallRequest withPathParams(DeleteCheckpointFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCheckpointFirewallSecurity security;
    public DeleteCheckpointFirewallRequest withSecurity(DeleteCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}