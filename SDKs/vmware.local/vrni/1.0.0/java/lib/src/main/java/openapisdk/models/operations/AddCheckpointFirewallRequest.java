package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCheckpointFirewallRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSourceRequest request;
    public AddCheckpointFirewallRequest withRequest(openapisdk.models.shared.SwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddCheckpointFirewallSecurity security;
    public AddCheckpointFirewallRequest withSecurity(AddCheckpointFirewallSecurity security) {
        this.security = security;
        return this;
    }
}