package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HoldingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding")
    public Holding[] holding;
    public HoldingResponse withHolding(Holding[] holding) {
        this.holding = holding;
        return this;
    }
}