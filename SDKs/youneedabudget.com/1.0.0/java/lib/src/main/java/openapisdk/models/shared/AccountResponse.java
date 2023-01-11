package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountResponse {
    @JsonProperty("data")
    public AccountResponseData data;
    public AccountResponse withData(AccountResponseData data) {
        this.data = data;
        return this;
    }
}