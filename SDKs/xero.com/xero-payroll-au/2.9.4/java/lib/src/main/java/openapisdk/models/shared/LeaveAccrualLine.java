package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveAccrualLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoCalculate")
    public Boolean autoCalculate;
    public LeaveAccrualLine withAutoCalculate(Boolean autoCalculate) {
        this.autoCalculate = autoCalculate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveAccrualLine withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public LeaveAccrualLine withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
}