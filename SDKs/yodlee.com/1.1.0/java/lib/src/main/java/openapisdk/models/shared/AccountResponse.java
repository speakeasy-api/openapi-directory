package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public Account[] account;
    public AccountResponse withAccount(Account[] account) {
        this.account = account;
        return this;
    }
}