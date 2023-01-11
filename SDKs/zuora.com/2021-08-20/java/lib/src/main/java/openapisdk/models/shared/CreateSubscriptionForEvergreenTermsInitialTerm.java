package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionForEvergreenTermsInitialTerm
 * Information about the first term of the subscription.
 * 
**/
public class CreateSubscriptionForEvergreenTermsInitialTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public CreateSubscriptionForEvergreenTermsInitialTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public CreateSubscriptionForEvergreenTermsInitialTermPeriodTypeEnum periodType;
    public CreateSubscriptionForEvergreenTermsInitialTerm withPeriodType(CreateSubscriptionForEvergreenTermsInitialTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public CreateSubscriptionForEvergreenTermsInitialTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public CreateSubscriptionForEvergreenTermsInitialTermTermTypeEnum termType;
    public CreateSubscriptionForEvergreenTermsInitialTerm withTermType(CreateSubscriptionForEvergreenTermsInitialTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}