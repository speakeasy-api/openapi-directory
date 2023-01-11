package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EarningsRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountCode")
    public String accountCode;
    public EarningsRate withAccountCode(String accountCode) {
        this.accountCode = accountCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccrueLeave")
    public Boolean accrueLeave;
    public EarningsRate withAccrueLeave(Boolean accrueLeave) {
        this.accrueLeave = accrueLeave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowanceType")
    public AllowanceTypeEnum allowanceType;
    public EarningsRate withAllowanceType(AllowanceTypeEnum allowanceType) {
        this.allowanceType = allowanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public EarningsRate withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentRecord")
    public Boolean currentRecord;
    public EarningsRate withCurrentRecord(Boolean currentRecord) {
        this.currentRecord = currentRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsRateID")
    public String earningsRateID;
    public EarningsRate withEarningsRateId(String earningsRateID) {
        this.earningsRateID = earningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EarningsType")
    public EarningsTypeEnum earningsType;
    public EarningsRate withEarningsType(EarningsTypeEnum earningsType) {
        this.earningsType = earningsType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmploymentTerminationPaymentType")
    public EmploymentTerminationPaymentTypeEnum employmentTerminationPaymentType;
    public EarningsRate withEmploymentTerminationPaymentType(EmploymentTerminationPaymentTypeEnum employmentTerminationPaymentType) {
        this.employmentTerminationPaymentType = employmentTerminationPaymentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsExemptFromSuper")
    public Boolean isExemptFromSuper;
    public EarningsRate withIsExemptFromSuper(Boolean isExemptFromSuper) {
        this.isExemptFromSuper = isExemptFromSuper;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsExemptFromTax")
    public Boolean isExemptFromTax;
    public EarningsRate withIsExemptFromTax(Boolean isExemptFromTax) {
        this.isExemptFromTax = isExemptFromTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsReportableAsW1")
    public Boolean isReportableAsW1;
    public EarningsRate withIsReportableAsW1(Boolean isReportableAsW1) {
        this.isReportableAsW1 = isReportableAsW1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Multiplier")
    public Double multiplier;
    public EarningsRate withMultiplier(Double multiplier) {
        this.multiplier = multiplier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public EarningsRate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePerUnit")
    public String ratePerUnit;
    public EarningsRate withRatePerUnit(String ratePerUnit) {
        this.ratePerUnit = ratePerUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RateType")
    public RateTypeEnum rateType;
    public EarningsRate withRateType(RateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypeOfUnits")
    public String typeOfUnits;
    public EarningsRate withTypeOfUnits(String typeOfUnits) {
        this.typeOfUnits = typeOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedDateUTC")
    public String updatedDateUTC;
    public EarningsRate withUpdatedDateUtc(String updatedDateUTC) {
        this.updatedDateUTC = updatedDateUTC;
        return this;
    }
}