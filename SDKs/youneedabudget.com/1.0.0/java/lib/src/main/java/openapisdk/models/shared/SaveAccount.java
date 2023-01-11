package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveAccount {
    @JsonProperty("balance")
    public Long balance;
    public SaveAccount withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SaveAccount withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public SaveAccountTypeEnum type;
    public SaveAccount withType(SaveAccountTypeEnum type) {
        this.type = type;
        return this;
    }
}