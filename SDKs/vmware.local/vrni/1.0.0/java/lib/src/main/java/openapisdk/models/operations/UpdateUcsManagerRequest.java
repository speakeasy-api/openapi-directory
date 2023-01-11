package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUcsManagerRequest {
    public UpdateUcsManagerPathParams pathParams;
    public UpdateUcsManagerRequest withPathParams(UpdateUcsManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchDataSource request;
    public UpdateUcsManagerRequest withRequest(openapisdk.models.shared.SwitchDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateUcsManagerSecurity security;
    public UpdateUcsManagerRequest withSecurity(UpdateUcsManagerSecurity security) {
        this.security = security;
        return this;
    }
}