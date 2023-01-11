package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDellSwitchSnmpConfigRequest {
    public UpdateDellSwitchSnmpConfigPathParams pathParams;
    public UpdateDellSwitchSnmpConfigRequest withPathParams(UpdateDellSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateDellSwitchSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateDellSwitchSnmpConfigSecurity security;
    public UpdateDellSwitchSnmpConfigRequest withSecurity(UpdateDellSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}