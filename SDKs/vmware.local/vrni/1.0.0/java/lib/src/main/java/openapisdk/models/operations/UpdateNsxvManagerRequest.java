package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNsxvManagerRequest {
    public UpdateNsxvManagerPathParams pathParams;
    public UpdateNsxvManagerRequest withPathParams(UpdateNsxvManagerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NsxvManagerDataSource request;
    public UpdateNsxvManagerRequest withRequest(openapisdk.models.shared.NsxvManagerDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateNsxvManagerSecurity security;
    public UpdateNsxvManagerRequest withSecurity(UpdateNsxvManagerSecurity security) {
        this.security = security;
        return this;
    }
}