package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountsResponseData {
    @JsonProperty("accounts")
    public Account[] accounts;
    public AccountsResponseData withAccounts(Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public AccountsResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}