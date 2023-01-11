package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTierRequest {
    public AddTierPathParams pathParams;
    public AddTierRequest withPathParams(AddTierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TierRequest request;
    public AddTierRequest withRequest(openapisdk.models.shared.TierRequest request) {
        this.request = request;
        return this;
    }
    public AddTierSecurity security;
    public AddTierRequest withSecurity(AddTierSecurity security) {
        this.security = security;
        return this;
    }
}