package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public LeaveType withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsPaidLeave")
    public Boolean isPaidLeave;
    public LeaveType withIsPaidLeave(Boolean isPaidLeave) {
        this.isPaidLeave = isPaidLeave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveLoadingRate")
    public Double leaveLoadingRate;
    public LeaveType withLeaveLoadingRate(Double leaveLoadingRate) {
        this.leaveLoadingRate = leaveLoadingRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveType withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public LeaveType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NormalEntitlement")
    public Double normalEntitlement;
    public LeaveType withNormalEntitlement(Double normalEntitlement) {
        this.normalEntitlement = normalEntitlement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShowOnPayslip")
    public Boolean showOnPayslip;
    public LeaveType withShowOnPayslip(Boolean showOnPayslip) {
        this.showOnPayslip = showOnPayslip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeOfUnits")
    public String typeOfUnits;
    public LeaveType withTypeOfUnits(String typeOfUnits) {
        this.typeOfUnits = typeOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public LeaveType withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
}