package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxDeclaration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApprovedWithholdingVariationPercentage")
    public Double approvedWithholdingVariationPercentage;
    public TaxDeclaration withApprovedWithholdingVariationPercentage(Double approvedWithholdingVariationPercentage) {
        this.approvedWithholdingVariationPercentage = approvedWithholdingVariationPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AustralianResidentForTaxPurposes")
    public Boolean australianResidentForTaxPurposes;
    public TaxDeclaration withAustralianResidentForTaxPurposes(Boolean australianResidentForTaxPurposes) {
        this.australianResidentForTaxPurposes = australianResidentForTaxPurposes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EligibleToReceiveLeaveLoading")
    public Boolean eligibleToReceiveLeaveLoading;
    public TaxDeclaration withEligibleToReceiveLeaveLoading(Boolean eligibleToReceiveLeaveLoading) {
        this.eligibleToReceiveLeaveLoading = eligibleToReceiveLeaveLoading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeID")
    public String employeeID;
    public TaxDeclaration withEmployeeId(String employeeID) {
        this.employeeID = employeeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmploymentBasis")
    public EmploymentBasisEnum employmentBasis;
    public TaxDeclaration withEmploymentBasis(EmploymentBasisEnum employmentBasis) {
        this.employmentBasis = employmentBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasHELPDebt")
    public Boolean hasHELPDebt;
    public TaxDeclaration withHasHelpDebt(Boolean hasHELPDebt) {
        this.hasHELPDebt = hasHELPDebt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasSFSSDebt")
    public Boolean hasSFSSDebt;
    public TaxDeclaration withHasSfssDebt(Boolean hasSFSSDebt) {
        this.hasSFSSDebt = hasSFSSDebt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasStudentStartupLoan")
    public Boolean hasStudentStartupLoan;
    public TaxDeclaration withHasStudentStartupLoan(Boolean hasStudentStartupLoan) {
        this.hasStudentStartupLoan = hasStudentStartupLoan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasTradeSupportLoanDebt")
    public Boolean hasTradeSupportLoanDebt;
    public TaxDeclaration withHasTradeSupportLoanDebt(Boolean hasTradeSupportLoanDebt) {
        this.hasTradeSupportLoanDebt = hasTradeSupportLoanDebt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResidencyStatus")
    public ResidencyStatusEnum residencyStatus;
    public TaxDeclaration withResidencyStatus(ResidencyStatusEnum residencyStatus) {
        this.residencyStatus = residencyStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TFNExemptionType")
    public TfnExemptionTypeEnum tfnExemptionType;
    public TaxDeclaration withTfnExemptionType(TfnExemptionTypeEnum tfnExemptionType) {
        this.tfnExemptionType = tfnExemptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxFileNumber")
    public String taxFileNumber;
    public TaxDeclaration withTaxFileNumber(String taxFileNumber) {
        this.taxFileNumber = taxFileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxFreeThresholdClaimed")
    public Boolean taxFreeThresholdClaimed;
    public TaxDeclaration withTaxFreeThresholdClaimed(Boolean taxFreeThresholdClaimed) {
        this.taxFreeThresholdClaimed = taxFreeThresholdClaimed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaxOffsetEstimatedAmount")
    public Double taxOffsetEstimatedAmount;
    public TaxDeclaration withTaxOffsetEstimatedAmount(Double taxOffsetEstimatedAmount) {
        this.taxOffsetEstimatedAmount = taxOffsetEstimatedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public TaxDeclaration withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpwardVariationTaxWithholdingAmount")
    public Double upwardVariationTaxWithholdingAmount;
    public TaxDeclaration withUpwardVariationTaxWithholdingAmount(Double upwardVariationTaxWithholdingAmount) {
        this.upwardVariationTaxWithholdingAmount = upwardVariationTaxWithholdingAmount;
        return this;
    }
}