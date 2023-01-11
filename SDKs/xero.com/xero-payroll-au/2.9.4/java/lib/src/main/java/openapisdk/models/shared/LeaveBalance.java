package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveName")
    public String leaveName;
    public LeaveBalance withLeaveName(String leaveName) {
        this.leaveName = leaveName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveBalance withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public LeaveBalance withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeOfUnits")
    public String typeOfUnits;
    public LeaveBalance withTypeOfUnits(String typeOfUnits) {
        this.typeOfUnits = typeOfUnits;
        return this;
    }
}