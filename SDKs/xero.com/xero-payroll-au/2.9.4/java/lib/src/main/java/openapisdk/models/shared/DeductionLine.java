package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeductionLine {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Amount")
    public Double amount;
    public DeductionLine withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("CalculationType")
    public DeductionTypeCalculationTypeEnum calculationType;
    public DeductionLine withCalculationType(DeductionTypeCalculationTypeEnum calculationType) {
        this.calculationType = calculationType;
        return this;
    }
    @JsonProperty("DeductionTypeID")
    public String deductionTypeID;
    public DeductionLine withDeductionTypeId(String deductionTypeID) {
        this.deductionTypeID = deductionTypeID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfUnits")
    public Double numberOfUnits;
    public DeductionLine withNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Percentage")
    public Double percentage;
    public DeductionLine withPercentage(Double percentage) {
        this.percentage = percentage;
        return this;
    }
}