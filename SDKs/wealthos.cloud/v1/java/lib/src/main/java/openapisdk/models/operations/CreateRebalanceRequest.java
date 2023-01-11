package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRebalanceRequest {
    public CreateRebalanceHeaders headers;
    public CreateRebalanceRequest withHeaders(CreateRebalanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRebalanceSwitchInstructionRequest request;
    public CreateRebalanceRequest withRequest(CreateRebalanceSwitchInstructionRequest request) {
        this.request = request;
        return this;
    }
    public CreateRebalanceSecurity security;
    public CreateRebalanceRequest withSecurity(CreateRebalanceSecurity security) {
        this.security = security;
        return this;
    }
}