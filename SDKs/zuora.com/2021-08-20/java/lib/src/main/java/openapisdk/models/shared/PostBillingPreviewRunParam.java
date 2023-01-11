package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBillingPreviewRunParam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assumeRenewal")
    public String assumeRenewal;
    public PostBillingPreviewRunParam withAssumeRenewal(String assumeRenewal) {
        this.assumeRenewal = assumeRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batch")
    public String batch;
    public PostBillingPreviewRunParam withBatch(String batch) {
        this.batch = batch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTypeToExclude")
    public String chargeTypeToExclude;
    public PostBillingPreviewRunParam withChargeTypeToExclude(String chargeTypeToExclude) {
        this.chargeTypeToExclude = chargeTypeToExclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includingEvergreenSubscription")
    public Boolean includingEvergreenSubscription;
    public PostBillingPreviewRunParam withIncludingEvergreenSubscription(Boolean includingEvergreenSubscription) {
        this.includingEvergreenSubscription = includingEvergreenSubscription;
        return this;
    }
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostBillingPreviewRunParam withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}