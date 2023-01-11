package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargeModelDataOverrideChargeModelConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFieldPerUnitRate")
    public String customFieldPerUnitRate;
    public ChargeModelDataOverrideChargeModelConfiguration withCustomFieldPerUnitRate(String customFieldPerUnitRate) {
        this.customFieldPerUnitRate = customFieldPerUnitRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFieldTotalAmount")
    public String customFieldTotalAmount;
    public ChargeModelDataOverrideChargeModelConfiguration withCustomFieldTotalAmount(String customFieldTotalAmount) {
        this.customFieldTotalAmount = customFieldTotalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formula")
    public String formula;
    public ChargeModelDataOverrideChargeModelConfiguration withFormula(String formula) {
        this.formula = formula;
        return this;
    }
}