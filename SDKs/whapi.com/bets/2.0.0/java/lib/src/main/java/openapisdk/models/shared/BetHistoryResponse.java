package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BetHistoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bets")
    public PlacedBet[] bets;
    public BetHistoryResponse withBets(PlacedBet[] bets) {
        this.bets = bets;
        return this;
    }
}