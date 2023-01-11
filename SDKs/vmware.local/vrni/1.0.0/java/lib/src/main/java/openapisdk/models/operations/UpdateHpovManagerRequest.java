package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHpovManagerRequest {
    public UpdateHpovManagerPathParams pathParams;
    public UpdateHpovManagerRequest withPathParams(UpdateHpovManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateHpovManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateHpovManagerSecurity security;
    public UpdateHpovManagerRequest withSecurity(UpdateHpovManagerSecurity security) {
        this.security = security;
        return this;
    }
}