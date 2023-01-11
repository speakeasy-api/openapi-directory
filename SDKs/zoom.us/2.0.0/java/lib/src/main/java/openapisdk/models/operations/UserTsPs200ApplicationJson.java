package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserTsPs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tsp_accounts")
    public UserTsPs200ApplicationJsonTspAccountsList[] tspAccounts;
    public UserTsPs200ApplicationJson withTspAccounts(UserTsPs200ApplicationJsonTspAccountsList[] tspAccounts) {
        this.tspAccounts = tspAccounts;
        return this;
    }
}