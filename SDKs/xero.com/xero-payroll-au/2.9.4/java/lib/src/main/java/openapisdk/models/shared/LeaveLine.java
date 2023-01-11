package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LeaveLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualNumberOfUnits")
    public Double annualNumberOfUnits;
    public LeaveLine withAnnualNumberOfUnits(Double annualNumberOfUnits) {
        this.annualNumberOfUnits = annualNumberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationType")
    public LeaveLineCalculationTypeEnum calculationType;
    public LeaveLine withCalculationType(LeaveLineCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmploymentTerminationPaymentType")
    public EmploymentTerminationPaymentTypeEnum employmentTerminationPaymentType;
    public LeaveLine withEmploymentTerminationPaymentType(EmploymentTerminationPaymentTypeEnum employmentTerminationPaymentType) {
        this.employmentTerminationPaymentType = employmentTerminationPaymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntitlementFinalPayPayoutType")
    public EntitlementFinalPayPayoutTypeEnum entitlementFinalPayPayoutType;
    public LeaveLine withEntitlementFinalPayPayoutType(EntitlementFinalPayPayoutTypeEnum entitlementFinalPayPayoutType) {
        this.entitlementFinalPayPayoutType = entitlementFinalPayPayoutType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FullTimeNumberOfUnitsPerPeriod")
    public Double fullTimeNumberOfUnitsPerPeriod;
    public LeaveLine withFullTimeNumberOfUnitsPerPeriod(Double fullTimeNumberOfUnitsPerPeriod) {
        this.fullTimeNumberOfUnitsPerPeriod = fullTimeNumberOfUnitsPerPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeSuperannuationGuaranteeContribution")
    public Boolean includeSuperannuationGuaranteeContribution;
    public LeaveLine withIncludeSuperannuationGuaranteeContribution(Boolean includeSuperannuationGuaranteeContribution) {
        this.includeSuperannuationGuaranteeContribution = includeSuperannuationGuaranteeContribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LeaveTypeID")
    public String leaveTypeID;
    public LeaveLine withLeaveTypeId(String leaveTypeID) {
        this.leaveTypeID = leaveTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public LeaveLine withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
}