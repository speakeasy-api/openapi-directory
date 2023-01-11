package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHpvcManagerRequest {
    public UpdateHpvcManagerPathParams pathParams;
    public UpdateHpvcManagerRequest withPathParams(UpdateHpvcManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateHpvcManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateHpvcManagerSecurity security;
    public UpdateHpvcManagerRequest withSecurity(UpdateHpvcManagerSecurity security) {
        this.security = security;
        return this;
    }
}