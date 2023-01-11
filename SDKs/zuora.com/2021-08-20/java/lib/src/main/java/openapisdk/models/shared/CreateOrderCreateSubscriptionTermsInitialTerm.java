package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderCreateSubscriptionTermsInitialTerm
 * Information about the first term of the subscription.
 * 
**/
public class CreateOrderCreateSubscriptionTermsInitialTerm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public Long period;
    public CreateOrderCreateSubscriptionTermsInitialTerm withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum periodType;
    public CreateOrderCreateSubscriptionTermsInitialTerm withPeriodType(CreateOrderCreateSubscriptionTermsInitialTermPeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public CreateOrderCreateSubscriptionTermsInitialTerm withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("termType")
    public CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum termType;
    public CreateOrderCreateSubscriptionTermsInitialTerm withTermType(CreateOrderCreateSubscriptionTermsInitialTermTermTypeEnum termType) {
        this.termType = termType;
        return this;
    }
}