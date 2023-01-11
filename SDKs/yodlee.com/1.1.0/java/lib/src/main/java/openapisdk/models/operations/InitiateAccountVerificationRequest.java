package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateAccountVerificationRequest {
    public InitiateAccountVerificationPathParams pathParams;
    public InitiateAccountVerificationRequest withPathParams(InitiateAccountVerificationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VerifyAccountRequestInput request;
    public InitiateAccountVerificationRequest withRequest(openapisdk.models.shared.VerifyAccountRequestInput request) {
        this.request = request;
        return this;
    }
}