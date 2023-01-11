package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSubscriptionForEvergreenTerms
 * Container for the terms and renewal settings of the subscription.
 * 
**/
public class CreateSubscriptionForEvergreenTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public CreateSubscriptionForEvergreenTerms withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("initialTerm")
    public CreateSubscriptionForEvergreenTermsInitialTerm initialTerm;
    public CreateSubscriptionForEvergreenTerms withInitialTerm(CreateSubscriptionForEvergreenTermsInitialTerm initialTerm) {
        this.initialTerm = initialTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public CreateSubscriptionForEvergreenTermsRenewalSettingEnum renewalSetting;
    public CreateSubscriptionForEvergreenTerms withRenewalSetting(CreateSubscriptionForEvergreenTermsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public CreateSubscriptionForEvergreenTerms withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}