package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCheckpointFirewallRequest {
    public UpdateCheckpointFirewallPathParams pathParams;
    public UpdateCheckpointFirewallRequest withPathParams(UpdateCheckpointFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateCheckpointFirewallRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateCheckpointFirewallSecurity security;
    public UpdateCheckpointFirewallRequest withSecurity(UpdateCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}