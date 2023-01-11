package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePhoneSipTrunkApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_account")
    public String carrierAccount;
    public UpdatePhoneSipTrunkApplicationJson withCarrierAccount(String carrierAccount) {
        this.carrierAccount = carrierAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdatePhoneSipTrunkApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
}