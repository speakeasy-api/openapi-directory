package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BetSlipRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legs")
    public Leg[] legs;
    public BetSlipRequest withLegs(Leg[] legs) {
        this.legs = legs;
        return this;
    }
}