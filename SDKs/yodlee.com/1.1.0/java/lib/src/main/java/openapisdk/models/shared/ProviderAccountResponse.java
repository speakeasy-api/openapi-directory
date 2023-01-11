package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccount")
    public ProviderAccount[] providerAccount;
    public ProviderAccountResponse withProviderAccount(ProviderAccount[] providerAccount) {
        this.providerAccount = providerAccount;
        return this;
    }
}