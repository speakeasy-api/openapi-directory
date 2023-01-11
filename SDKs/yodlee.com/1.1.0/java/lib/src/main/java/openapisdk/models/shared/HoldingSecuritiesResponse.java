package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HoldingSecuritiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding")
    public SecurityHolding[] holding;
    public HoldingSecuritiesResponse withHolding(SecurityHolding[] holding) {
        this.holding = holding;
        return this;
    }
}