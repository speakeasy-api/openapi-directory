package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreviewOrderCreateSubscriptionTerms
 * Container for the terms and renewal settings of the subscription.
 * 
**/
public class PreviewOrderCreateSubscriptionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public PreviewOrderCreateSubscriptionTerms withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("initialTerm")
    public PreviewOrderCreateSubscriptionTermsInitialTerm initialTerm;
    public PreviewOrderCreateSubscriptionTerms withInitialTerm(PreviewOrderCreateSubscriptionTermsInitialTerm initialTerm) {
        this.initialTerm = initialTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public PreviewOrderCreateSubscriptionTermsRenewalSettingEnum renewalSetting;
    public PreviewOrderCreateSubscriptionTerms withRenewalSetting(PreviewOrderCreateSubscriptionTermsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public PreviewOrderCreateSubscriptionTerms withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}