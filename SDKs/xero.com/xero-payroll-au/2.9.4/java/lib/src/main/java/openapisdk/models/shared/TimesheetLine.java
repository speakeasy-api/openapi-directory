package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimesheetLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsRateID")
    public String earningsRateID;
    public TimesheetLine withEarningsRateId(String earningsRateID) {
        this.earningsRateID = earningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double[] numberOfUnits;
    public TimesheetLine withNumberOfUnits(Double[] numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrackingItemID")
    public String trackingItemID;
    public TimesheetLine withTrackingItemId(String trackingItemID) {
        this.trackingItemID = trackingItemID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public TimesheetLine withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
}