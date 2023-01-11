package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateMatchingOrChallengeDepositeVerificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerificationRequestInput request;
    public InitiateMatchingOrChallengeDepositeVerificationRequest withRequest(openapisdk.models.shared.VerificationRequestInput request) {
        this.request = request;
        return this;
    }
}