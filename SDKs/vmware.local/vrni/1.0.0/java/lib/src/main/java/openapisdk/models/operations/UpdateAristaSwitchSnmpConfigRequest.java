package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAristaSwitchSnmpConfigRequest {
    public UpdateAristaSwitchSnmpConfigPathParams pathParams;
    public UpdateAristaSwitchSnmpConfigRequest withPathParams(UpdateAristaSwitchSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateAristaSwitchSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateAristaSwitchSnmpConfigSecurity security;
    public UpdateAristaSwitchSnmpConfigRequest withSecurity(UpdateAristaSwitchSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}