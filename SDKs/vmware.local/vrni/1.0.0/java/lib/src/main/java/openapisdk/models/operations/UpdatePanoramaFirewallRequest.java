package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePanoramaFirewallRequest {
    public UpdatePanoramaFirewallPathParams pathParams;
    public UpdatePanoramaFirewallRequest withPathParams(UpdatePanoramaFirewallPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdatePanoramaFirewallRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdatePanoramaFirewallSecurity security;
    public UpdatePanoramaFirewallRequest withSecurity(UpdatePanoramaFirewallSecurity security) {
        this.security = security;
        return this;
    }
}