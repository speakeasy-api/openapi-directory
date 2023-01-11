package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedNetworth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset")
    public Money asset;
    public DerivedNetworth withAsset(Money asset) {
        this.asset = asset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public DerivedNetworth withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("historicalBalances")
    public DerivedNetworthHistoricalBalance[] historicalBalances;
    public DerivedNetworth withHistoricalBalances(DerivedNetworthHistoricalBalance[] historicalBalances) {
        this.historicalBalances = historicalBalances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("liability")
    public Money liability;
    public DerivedNetworth withLiability(Money liability) {
        this.liability = liability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networth")
    public Money networth;
    public DerivedNetworth withNetworth(Money networth) {
        this.networth = networth;
        return this;
    }
}