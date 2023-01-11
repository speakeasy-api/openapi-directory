package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveTypeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public LeaveTypeInput withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsPaidLeave")
    public Boolean isPaidLeave;
    public LeaveTypeInput withIsPaidLeave(Boolean isPaidLeave) {
        this.isPaidLeave = isPaidLeave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveLoadingRate")
    public Double leaveLoadingRate;
    public LeaveTypeInput withLeaveLoadingRate(Double leaveLoadingRate) {
        this.leaveLoadingRate = leaveLoadingRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveTypeInput withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LeaveTypeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NormalEntitlement")
    public Double normalEntitlement;
    public LeaveTypeInput withNormalEntitlement(Double normalEntitlement) {
        this.normalEntitlement = normalEntitlement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowOnPayslip")
    public Boolean showOnPayslip;
    public LeaveTypeInput withShowOnPayslip(Boolean showOnPayslip) {
        this.showOnPayslip = showOnPayslip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeOfUnits")
    public String typeOfUnits;
    public LeaveTypeInput withTypeOfUnits(String typeOfUnits) {
        this.typeOfUnits = typeOfUnits;
        return this;
    }
}