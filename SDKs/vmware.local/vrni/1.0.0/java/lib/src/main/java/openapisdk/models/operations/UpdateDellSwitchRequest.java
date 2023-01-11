package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDellSwitchRequest {
    public UpdateDellSwitchPathParams pathParams;
    public UpdateDellSwitchRequest withPathParams(UpdateDellSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DellSwitchDataSource request;
    public UpdateDellSwitchRequest withRequest(openapisdk.models.shared.DellSwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateDellSwitchSecurity security;
    public UpdateDellSwitchRequest withSecurity(UpdateDellSwitchSecurity security) {
        this.security = security;
        return this;
    }
}