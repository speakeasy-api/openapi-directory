package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostGenerateBillingDocumentType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoPost")
    public Boolean autoPost;
    public PostGenerateBillingDocumentType withAutoPost(Boolean autoPost) {
        this.autoPost = autoPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public PostGenerateBillingDocumentType withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeTypeToExclude")
    public String[] chargeTypeToExclude;
    public PostGenerateBillingDocumentType withChargeTypeToExclude(String[] chargeTypeToExclude) {
        this.chargeTypeToExclude = chargeTypeToExclude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public LocalDate effectiveDate;
    public PostGenerateBillingDocumentType withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptionIds")
    public String[] subscriptionIds;
    public PostGenerateBillingDocumentType withSubscriptionIds(String[] subscriptionIds) {
        this.subscriptionIds = subscriptionIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetDate")
    public LocalDate targetDate;
    public PostGenerateBillingDocumentType withTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
        return this;
    }
}