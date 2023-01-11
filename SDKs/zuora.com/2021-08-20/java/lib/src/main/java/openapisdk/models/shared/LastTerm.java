package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LastTerm
 * The length of the period for the current subscription term.
**/
public class LastTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public LastTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public LastTermPeriodTypeEnum periodType;
    public LastTerm withPeriodType(LastTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public LastTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public LastTermTermTypeEnum termType;
    public LastTerm withTermType(LastTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}