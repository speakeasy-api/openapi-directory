package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatedAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public CreatedAccountInfo[] account;
    public CreatedAccountResponse withAccount(CreatedAccountInfo[] account) {
        this.account = account;
        return this;
    }
}