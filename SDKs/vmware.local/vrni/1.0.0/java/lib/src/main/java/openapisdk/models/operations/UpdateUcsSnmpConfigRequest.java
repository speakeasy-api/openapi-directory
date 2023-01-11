package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUcsSnmpConfigRequest {
    public UpdateUcsSnmpConfigPathParams pathParams;
    public UpdateUcsSnmpConfigRequest withPathParams(UpdateUcsSnmpConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SnmpConfig request;
    public UpdateUcsSnmpConfigRequest withRequest(openapisdk.models.shared.SnmpConfig request) {
        this.request = request;
        return this;
    }
    public UpdateUcsSnmpConfigSecurity security;
    public UpdateUcsSnmpConfigRequest withSecurity(UpdateUcsSnmpConfigSecurity security) {
        this.security = security;
        return this;
    }
}