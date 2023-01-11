package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccountsResponse {
    @JsonProperty("data")
    public AccountsResponseData data;
    public AccountsResponse withData(AccountsResponseData data) {
        this.data = data;
        return this;
    }
}