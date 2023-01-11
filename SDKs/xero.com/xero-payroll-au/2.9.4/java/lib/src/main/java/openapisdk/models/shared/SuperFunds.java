package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SuperFunds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuperFunds")
    public SuperFund[] superFunds;
    public SuperFunds withSuperFunds(SuperFund[] superFunds) {
        this.superFunds = superFunds;
        return this;
    }
}