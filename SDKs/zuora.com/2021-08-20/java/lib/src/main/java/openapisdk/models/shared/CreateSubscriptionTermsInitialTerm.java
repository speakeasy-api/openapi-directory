package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionTermsInitialTerm
 * Information about the first term of the subscription.
 * 
**/
public class CreateSubscriptionTermsInitialTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public CreateSubscriptionTermsInitialTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public CreateSubscriptionTermsInitialTermPeriodTypeEnum periodType;
    public CreateSubscriptionTermsInitialTerm withPeriodType(CreateSubscriptionTermsInitialTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public CreateSubscriptionTermsInitialTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public CreateSubscriptionTermsInitialTermTermTypeEnum termType;
    public CreateSubscriptionTermsInitialTerm withTermType(CreateSubscriptionTermsInitialTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}