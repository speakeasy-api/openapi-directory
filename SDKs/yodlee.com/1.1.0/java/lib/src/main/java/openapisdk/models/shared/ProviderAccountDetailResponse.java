package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountDetailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccount")
    public ProviderAccountDetail[] providerAccount;
    public ProviderAccountDetailResponse withProviderAccount(ProviderAccountDetail[] providerAccount) {
        this.providerAccount = providerAccount;
        return this;
    }
}