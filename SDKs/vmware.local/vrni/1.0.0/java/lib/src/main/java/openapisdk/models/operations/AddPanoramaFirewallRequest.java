package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPanoramaFirewallRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSourceRequest request;
    public AddPanoramaFirewallRequest withRequest(openapisdk.models.shared.SwitchDataSourceRequest request) {
        this.request = request;
        return this;
    }
    public AddPanoramaFirewallSecurity security;
    public AddPanoramaFirewallRequest withSecurity(AddPanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}