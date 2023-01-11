package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public Verification[] verification;
    public VerificationResponse withVerification(Verification[] verification) {
        this.verification = verification;
        return this;
    }
}