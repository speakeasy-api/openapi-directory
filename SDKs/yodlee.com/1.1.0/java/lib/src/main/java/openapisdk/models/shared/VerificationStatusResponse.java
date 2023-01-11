package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public VerificationStatus[] verification;
    public VerificationStatusResponse withVerification(VerificationStatus[] verification) {
        this.verification = verification;
        return this;
    }
}