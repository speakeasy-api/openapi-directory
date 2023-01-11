package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBillingPreviewParam {
    @JsonProperty("accountId")
    public String accountId;
    public PostBillingPreviewParam withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assumeRenewal")
    public String assumeRenewal;
    public PostBillingPreviewParam withAssumeRenewal(String assumeRenewal) {
        this.assumeRenewal = assumeRenewal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTypeToExclude")
    public String chargeTypeToExclude;
    public PostBillingPreviewParam withChargeTypeToExclude(String chargeTypeToExclude) {
        this.chargeTypeToExclude = chargeTypeToExclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includingEvergreenSubscription")
    public Boolean includingEvergreenSubscription;
    public PostBillingPreviewParam withIncludingEvergreenSubscription(Boolean includingEvergreenSubscription) {
        this.includingEvergreenSubscription = includingEvergreenSubscription;
        return this;
    }
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostBillingPreviewParam withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}