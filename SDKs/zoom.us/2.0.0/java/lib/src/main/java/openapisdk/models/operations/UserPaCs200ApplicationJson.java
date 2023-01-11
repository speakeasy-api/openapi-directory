package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPaCs200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pac_accounts")
    public UserPaCs200ApplicationJsonPacAccounts[] pacAccounts;
    public UserPaCs200ApplicationJson withPacAccounts(UserPaCs200ApplicationJsonPacAccounts[] pacAccounts) {
        this.pacAccounts = pacAccounts;
        return this;
    }
}