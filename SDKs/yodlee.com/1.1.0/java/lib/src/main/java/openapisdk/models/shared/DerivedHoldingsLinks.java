package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedHoldingsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdings")
    public String holdings;
    public DerivedHoldingsLinks withHoldings(String holdings) {
        this.holdings = holdings;
        return this;
    }
}