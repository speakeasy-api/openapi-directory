package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPhoneSipTrunk201ApplicationJsonSipTrunks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_account")
    public String carrierAccount;
    public PostPhoneSipTrunk201ApplicationJsonSipTrunks withCarrierAccount(String carrierAccount) {
        this.carrierAccount = carrierAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostPhoneSipTrunk201ApplicationJsonSipTrunks withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostPhoneSipTrunk201ApplicationJsonSipTrunks withName(String name) {
        this.name = name;
        return this;
    }
}