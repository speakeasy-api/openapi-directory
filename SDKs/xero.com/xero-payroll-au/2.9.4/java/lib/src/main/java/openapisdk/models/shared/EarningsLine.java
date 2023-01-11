package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EarningsLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public EarningsLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualSalary")
    public Double annualSalary;
    public EarningsLine withAnnualSalary(Double annualSalary) {
        this.annualSalary = annualSalary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CalculationType")
    public EarningsRateCalculationTypeEnum calculationType;
    public EarningsLine withCalculationType(EarningsRateCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonProperty("EarningsRateID")
    public String earningsRateID;
    public EarningsLine withEarningsRateId(String earningsRateID) {
        this.earningsRateID = earningsRateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FixedAmount")
    public Double fixedAmount;
    public EarningsLine withFixedAmount(Double fixedAmount) {
        this.fixedAmount = fixedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NormalNumberOfUnits")
    public Double normalNumberOfUnits;
    public EarningsLine withNormalNumberOfUnits(Double normalNumberOfUnits) {
        this.normalNumberOfUnits = normalNumberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public EarningsLine withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnitsPerWeek")
    public Double numberOfUnitsPerWeek;
    public EarningsLine withNumberOfUnitsPerWeek(Double numberOfUnitsPerWeek) {
        this.numberOfUnitsPerWeek = numberOfUnitsPerWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RatePerUnit")
    public Double ratePerUnit;
    public EarningsLine withRatePerUnit(Double ratePerUnit) {
        this.ratePerUnit = ratePerUnit;
        return this;
    }
}