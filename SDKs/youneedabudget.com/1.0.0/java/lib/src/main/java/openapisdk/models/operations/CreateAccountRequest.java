package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountRequest {
    public CreateAccountPathParams pathParams;
    public CreateAccountRequest withPathParams(CreateAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SaveAccountWrapper request;
    public CreateAccountRequest withRequest(openapisdk.models.shared.SaveAccountWrapper request) {
        this.request = request;
        return this;
    }
}