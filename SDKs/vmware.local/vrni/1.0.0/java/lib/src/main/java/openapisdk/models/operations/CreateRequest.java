package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserCredential request;
    public CreateRequest withRequest(openapisdk.models.shared.UserCredential request) {
        this.request = request;
        return this;
    }
}