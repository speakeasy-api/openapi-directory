package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveAccountWrapper {
    @JsonProperty("account")
    public SaveAccount account;
    public SaveAccountWrapper withAccount(SaveAccount account) {
        this.account = account;
        return this;
    }
}