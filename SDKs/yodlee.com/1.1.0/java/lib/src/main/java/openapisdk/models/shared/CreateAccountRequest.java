package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAccountRequest {
    @JsonProperty("account")
    public CreateAccountInfo account;
    public CreateAccountRequest withAccount(CreateAccountInfo account) {
        this.account = account;
        return this;
    }
}