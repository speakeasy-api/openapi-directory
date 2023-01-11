package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAristaSwitchRequest {
    public UpdateAristaSwitchPathParams pathParams;
    public UpdateAristaSwitchRequest withPathParams(UpdateAristaSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateAristaSwitchRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateAristaSwitchSecurity security;
    public UpdateAristaSwitchRequest withSecurity(UpdateAristaSwitchSecurity security) {
        this.security = security;
        return this;
    }
}