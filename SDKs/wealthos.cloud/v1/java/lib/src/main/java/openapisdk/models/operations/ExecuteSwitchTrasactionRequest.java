package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteSwitchTrasactionRequest {
    public ExecuteSwitchTrasactionHeaders headers;
    public ExecuteSwitchTrasactionRequest withHeaders(ExecuteSwitchTrasactionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ExecuteSwitchTrasactionSwitchInstructionRequest request;
    public ExecuteSwitchTrasactionRequest withRequest(ExecuteSwitchTrasactionSwitchInstructionRequest request) {
        this.request = request;
        return this;
    }
    public ExecuteSwitchTrasactionSecurity security;
    public ExecuteSwitchTrasactionRequest withSecurity(ExecuteSwitchTrasactionSecurity security) {
        this.security = security;
        return this;
    }
}