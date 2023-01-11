package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountHistoricalBalancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public AccountHistory[] account;
    public AccountHistoricalBalancesResponse withAccount(AccountHistory[] account) {
        this.account = account;
        return this;
    }
}