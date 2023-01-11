package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJuniperSwitchSnmpConfigRequest {
    public UpdateJuniperSwitchSnmpConfigPathParams pathParams;
    public UpdateJuniperSwitchSnmpConfigRequest withPathParams(UpdateJuniperSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateJuniperSwitchSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateJuniperSwitchSnmpConfigSecurity security;
    public UpdateJuniperSwitchSnmpConfigRequest withSecurity(UpdateJuniperSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}