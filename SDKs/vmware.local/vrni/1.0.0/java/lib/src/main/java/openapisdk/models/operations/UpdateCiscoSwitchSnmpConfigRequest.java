package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCiscoSwitchSnmpConfigRequest {
    public UpdateCiscoSwitchSnmpConfigPathParams pathParams;
    public UpdateCiscoSwitchSnmpConfigRequest withPathParams(UpdateCiscoSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateCiscoSwitchSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateCiscoSwitchSnmpConfigSecurity security;
    public UpdateCiscoSwitchSnmpConfigRequest withSecurity(UpdateCiscoSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}