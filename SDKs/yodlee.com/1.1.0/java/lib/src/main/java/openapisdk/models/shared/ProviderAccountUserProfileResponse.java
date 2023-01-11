package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountUserProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccount")
    public ProviderAccountProfile[] providerAccount;
    public ProviderAccountUserProfileResponse withProviderAccount(ProviderAccountProfile[] providerAccount) {
        this.providerAccount = providerAccount;
        return this;
    }
}