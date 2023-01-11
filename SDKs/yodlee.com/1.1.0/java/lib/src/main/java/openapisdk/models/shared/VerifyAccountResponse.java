package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyAccount")
    public VerifyAccount verifyAccount;
    public VerifyAccountResponse withVerifyAccount(VerifyAccount verifyAccount) {
        this.verifyAccount = verifyAccount;
        return this;
    }
}