package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateJuniperSwitchRequest {
    public UpdateJuniperSwitchPathParams pathParams;
    public UpdateJuniperSwitchRequest withPathParams(UpdateJuniperSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateJuniperSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateJuniperSwitchSecurity security;
    public UpdateJuniperSwitchRequest withSecurity(UpdateJuniperSwitchSecurity security) {
        this.security = security;
        return this;
    }
}