package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerificationRequestInput {
    @JsonProperty("verification")
    public VerificationInput verification;
    public VerificationRequestInput withVerification(VerificationInput verification) {
        this.verification = verification;
        return this;
    }
}