package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserRequest request;
    public RegisterUserRequest withRequest(openapisdk.models.shared.UserRequest request) {
        this.request = request;
        return this;
    }
}