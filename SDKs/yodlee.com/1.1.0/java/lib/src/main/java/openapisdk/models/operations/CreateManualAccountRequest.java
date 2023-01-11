package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateManualAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAccountRequest request;
    public CreateManualAccountRequest withRequest(openapisdk.models.shared.CreateAccountRequest request) {
        this.request = request;
        return this;
    }
}