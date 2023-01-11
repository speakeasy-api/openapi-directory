package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EndConditions
 * Specifies when a charge becomes inactive.
 * 
**/
public class EndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDateCondition")
    public EndConditionsEndDateConditionEnum endDateCondition;
    public EndConditions withEndDateCondition(EndConditionsEndDateConditionEnum endDateCondition) {
        this.endDateCondition = endDateCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificEndDate")
    public LocalDate specificEndDate;
    public EndConditions withSpecificEndDate(LocalDate specificEndDate) {
        this.specificEndDate = specificEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upToPeriods")
    public Long upToPeriods;
    public EndConditions withUpToPeriods(Long upToPeriods) {
        this.upToPeriods = upToPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upToPeriodsType")
    public EndConditionsUpToPeriodsTypeEnum upToPeriodsType;
    public EndConditions withUpToPeriodsType(EndConditionsUpToPeriodsTypeEnum upToPeriodsType) {
        this.upToPeriodsType = upToPeriodsType;
        return this;
    }
}