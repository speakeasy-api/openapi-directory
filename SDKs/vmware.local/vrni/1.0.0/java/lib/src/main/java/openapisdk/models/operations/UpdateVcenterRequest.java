package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVcenterRequest {
    public UpdateVcenterPathParams pathParams;
    public UpdateVcenterRequest withPathParams(UpdateVcenterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VCenterDataSource request;
    public UpdateVcenterRequest withRequest(openapisdk.models.shared.VCenterDataSource request) {
        this.request = request;
        return this;
    }
    public UpdateVcenterSecurity security;
    public UpdateVcenterRequest withSecurity(UpdateVcenterSecurity security) {
        this.security = security;
        return this;
    }
}