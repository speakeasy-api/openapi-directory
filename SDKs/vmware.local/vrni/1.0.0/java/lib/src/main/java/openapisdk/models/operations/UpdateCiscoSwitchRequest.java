package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCiscoSwitchRequest {
    public UpdateCiscoSwitchPathParams pathParams;
    public UpdateCiscoSwitchRequest withPathParams(UpdateCiscoSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CiscoSwitchDataSource request;
    public UpdateCiscoSwitchRequest withRequest(openapisdk.models.shared.CiscoSwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateCiscoSwitchSecurity security;
    public UpdateCiscoSwitchRequest withSecurity(UpdateCiscoSwitchSecurity security) {
        this.security = security;
        return this;
    }
}