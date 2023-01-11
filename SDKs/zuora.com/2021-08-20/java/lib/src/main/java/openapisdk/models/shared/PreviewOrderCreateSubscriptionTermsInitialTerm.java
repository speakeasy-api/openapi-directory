package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderCreateSubscriptionTermsInitialTerm
 * Information about the first term of the subscription.
 * 
**/
public class PreviewOrderCreateSubscriptionTermsInitialTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public PreviewOrderCreateSubscriptionTermsInitialTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum periodType;
    public PreviewOrderCreateSubscriptionTermsInitialTerm withPeriodType(PreviewOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public PreviewOrderCreateSubscriptionTermsInitialTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum termType;
    public PreviewOrderCreateSubscriptionTermsInitialTerm withTermType(PreviewOrderCreateSubscriptionTermsInitialTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}