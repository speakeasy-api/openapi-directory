package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePreferencesRequest {
    public UpdatePreferencesPathParams pathParams;
    public UpdatePreferencesRequest withPathParams(UpdatePreferencesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProviderAccountPreferencesRequest request;
    public UpdatePreferencesRequest withRequest(openapisdk.models.shared.ProviderAccountPreferencesRequest request) {
        this.request = request;
        return this;
    }
}