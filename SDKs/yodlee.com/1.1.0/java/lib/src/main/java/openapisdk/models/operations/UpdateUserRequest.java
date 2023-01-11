package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserRequest request;
    public UpdateUserRequest withRequest(openapisdk.models.shared.UpdateUserRequest request) {
        this.request = request;
        return this;
    }
}