package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InitialTerm
 * The length of the period for the current subscription term.
**/
public class InitialTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public InitialTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public InitialTermPeriodTypeEnum periodType;
    public InitialTerm withPeriodType(InitialTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public InitialTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public InitialTermTermTypeEnum termType;
    public InitialTerm withTermType(InitialTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}