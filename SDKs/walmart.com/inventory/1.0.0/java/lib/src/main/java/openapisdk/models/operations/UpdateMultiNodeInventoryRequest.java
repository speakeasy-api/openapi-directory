package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMultiNodeInventoryRequest {
    public UpdateMultiNodeInventoryPathParams pathParams;
    public UpdateMultiNodeInventoryRequest withPathParams(UpdateMultiNodeInventoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateMultiNodeInventoryHeaders headers;
    public UpdateMultiNodeInventoryRequest withHeaders(UpdateMultiNodeInventoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateMultiNodeInventoryRequestBody request;
    public UpdateMultiNodeInventoryRequest withRequest(UpdateMultiNodeInventoryRequestBody request) {
        this.request = request;
        return this;
    }
}