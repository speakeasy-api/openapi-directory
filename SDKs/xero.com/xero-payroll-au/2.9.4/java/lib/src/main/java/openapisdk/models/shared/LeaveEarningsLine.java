package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveEarningsLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsRateID")
    public String earningsRateID;
    public LeaveEarningsLine withEarningsRateId(String earningsRateID) {
        this.earningsRateID = earningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public LeaveEarningsLine withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePerUnit")
    public Double ratePerUnit;
    public LeaveEarningsLine withRatePerUnit(Double ratePerUnit) {
        this.ratePerUnit = ratePerUnit;
        return this;
    }
}