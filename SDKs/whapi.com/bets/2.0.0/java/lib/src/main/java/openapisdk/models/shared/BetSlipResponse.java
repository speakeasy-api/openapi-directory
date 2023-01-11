package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BetSlipResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("betslip")
    public Betslipbet[] betslip;
    public BetSlipResponse withBetslip(Betslipbet[] betslip) {
        this.betslip = betslip;
        return this;
    }
}