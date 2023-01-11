package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountRequest {
    public UpdateAccountPathParams pathParams;
    public UpdateAccountRequest withPathParams(UpdateAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateAccountRequest request;
    public UpdateAccountRequest withRequest(openapisdk.models.shared.UpdateAccountRequest request) {
        this.request = request;
        return this;
    }
}