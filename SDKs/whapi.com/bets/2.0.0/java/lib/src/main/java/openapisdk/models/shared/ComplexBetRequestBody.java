package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ComplexBetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bets")
    public Bet[] bets;
    public ComplexBetRequestBody withBets(Bet[] bets) {
        this.bets = bets;
        return this;
    }
}