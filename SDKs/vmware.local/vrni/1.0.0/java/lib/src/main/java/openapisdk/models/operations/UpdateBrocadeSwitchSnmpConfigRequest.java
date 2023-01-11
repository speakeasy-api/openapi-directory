package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBrocadeSwitchSnmpConfigRequest {
    public UpdateBrocadeSwitchSnmpConfigPathParams pathParams;
    public UpdateBrocadeSwitchSnmpConfigRequest withPathParams(UpdateBrocadeSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateBrocadeSwitchSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateBrocadeSwitchSnmpConfigSecurity security;
    public UpdateBrocadeSwitchSnmpConfigRequest withSecurity(UpdateBrocadeSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}