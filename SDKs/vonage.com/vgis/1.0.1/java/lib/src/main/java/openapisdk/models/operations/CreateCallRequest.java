package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CallCreate request;
    public CreateCallRequest withRequest(openapisdk.models.shared.CallCreate request) {
        this.request = request;
        return this;
    }
}