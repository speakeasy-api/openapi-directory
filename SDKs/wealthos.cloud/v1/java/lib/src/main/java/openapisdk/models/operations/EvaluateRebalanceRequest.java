package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EvaluateRebalanceRequest {
    public EvaluateRebalanceHeaders headers;
    public EvaluateRebalanceRequest withHeaders(EvaluateRebalanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EvaluateRebalanceSwitchInstructionRequest request;
    public EvaluateRebalanceRequest withRequest(EvaluateRebalanceSwitchInstructionRequest request) {
        this.request = request;
        return this;
    }
    public EvaluateRebalanceSecurity security;
    public EvaluateRebalanceRequest withSecurity(EvaluateRebalanceSecurity security) {
        this.security = security;
        return this;
    }
}