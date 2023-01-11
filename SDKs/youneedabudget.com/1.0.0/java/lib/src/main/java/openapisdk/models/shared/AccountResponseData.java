package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountResponseData {
    @JsonProperty("account")
    public Account account;
    public AccountResponseData withAccount(Account account) {
        this.account = account;
        return this;
    }
}