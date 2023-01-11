package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimesheetLineInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsRateID")
    public String earningsRateID;
    public TimesheetLineInput withEarningsRateId(String earningsRateID) {
        this.earningsRateID = earningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double[] numberOfUnits;
    public TimesheetLineInput withNumberOfUnits(Double[] numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingItemID")
    public String trackingItemID;
    public TimesheetLineInput withTrackingItemId(String trackingItemID) {
        this.trackingItemID = trackingItemID;
        return this;
    }
}