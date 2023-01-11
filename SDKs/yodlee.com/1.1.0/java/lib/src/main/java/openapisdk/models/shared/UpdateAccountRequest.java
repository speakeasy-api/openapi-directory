package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateAccountRequest {
    @JsonProperty("account")
    public UpdateAccountInfo account;
    public UpdateAccountRequest withAccount(UpdateAccountInfo account) {
        this.account = account;
        return this;
    }
}