package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionTerms
 * Container for the terms and renewal settings of the subscription.
 * 
**/
public class CreateSubscriptionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public CreateSubscriptionTerms withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("initialTerm")
    public CreateSubscriptionTermsInitialTerm initialTerm;
    public CreateSubscriptionTerms withInitialTerm(CreateSubscriptionTermsInitialTerm initialTerm) {
        this.initialTerm = initialTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public CreateSubscriptionTermsRenewalSettingEnum renewalSetting;
    public CreateSubscriptionTerms withRenewalSetting(CreateSubscriptionTermsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public CreateSubscriptionTerms withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}