package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historicalBalances")
    public HistoricalBalance[] historicalBalances;
    public AccountHistory withHistoricalBalances(HistoricalBalance[] historicalBalances) {
        this.historicalBalances = historicalBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public AccountHistory withId(Long id) {
        this.id = id;
        return this;
    }
}