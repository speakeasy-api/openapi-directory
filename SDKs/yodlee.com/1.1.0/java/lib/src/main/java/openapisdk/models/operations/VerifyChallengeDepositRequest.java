package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyChallengeDepositRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVerificationRequestInput request;
    public VerifyChallengeDepositRequest withRequest(openapisdk.models.shared.UpdateVerificationRequestInput request) {
        this.request = request;
        return this;
    }
}