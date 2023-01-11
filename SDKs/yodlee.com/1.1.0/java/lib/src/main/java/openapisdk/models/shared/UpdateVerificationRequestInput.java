package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVerificationRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public UpdateVerificationInput verification;
    public UpdateVerificationRequestInput withVerification(UpdateVerificationInput verification) {
        this.verification = verification;
        return this;
    }
}