package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodAlignment")
    public BillingUpdateBillingPeriodAlignmentEnum billingPeriodAlignment;
    public BillingUpdate withBillingPeriodAlignment(BillingUpdateBillingPeriodAlignmentEnum billingPeriodAlignment) {
        this.billingPeriodAlignment = billingPeriodAlignment;
        return this;
    }
}