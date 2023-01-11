package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatedProviderAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccount")
    public UpdatedProviderAccount[] providerAccount;
    public UpdatedProviderAccountResponse withProviderAccount(UpdatedProviderAccount[] providerAccount) {
        this.providerAccount = providerAccount;
        return this;
    }
}