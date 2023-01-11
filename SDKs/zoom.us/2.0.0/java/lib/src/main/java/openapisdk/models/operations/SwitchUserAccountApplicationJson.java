package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SwitchUserAccountApplicationJson {
    @JsonProperty("account_id")
    public String accountId;
    public SwitchUserAccountApplicationJson withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
}