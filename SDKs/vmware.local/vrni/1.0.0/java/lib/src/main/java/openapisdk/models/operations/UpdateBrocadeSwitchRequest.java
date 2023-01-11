package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBrocadeSwitchRequest {
    public UpdateBrocadeSwitchPathParams pathParams;
    public UpdateBrocadeSwitchRequest withPathParams(UpdateBrocadeSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateBrocadeSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateBrocadeSwitchSecurity security;
    public UpdateBrocadeSwitchRequest withSecurity(UpdateBrocadeSwitchSecurity security) {
        this.security = security;
        return this;
    }
}