package openapisdk.models.operations;



public class GetCheckpointFirewallRequest {
    public GetCheckpointFirewallPathParams pathParams;
    public GetCheckpointFirewallRequest withPathParams(GetCheckpointFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCheckpointFirewallSecurity security;
    public GetCheckpointFirewallRequest withSecurity(GetCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}