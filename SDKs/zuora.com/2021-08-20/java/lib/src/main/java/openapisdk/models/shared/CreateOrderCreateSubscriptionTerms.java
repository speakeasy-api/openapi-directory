package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderCreateSubscriptionTerms
 * Container for the terms and renewal settings of the subscription.
 * 
**/
public class CreateOrderCreateSubscriptionTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public CreateOrderCreateSubscriptionTerms withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("initialTerm")
    public CreateOrderCreateSubscriptionTermsInitialTerm initialTerm;
    public CreateOrderCreateSubscriptionTerms withInitialTerm(CreateOrderCreateSubscriptionTermsInitialTerm initialTerm) {
        this.initialTerm = initialTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public CreateOrderCreateSubscriptionTermsRenewalSettingEnum renewalSetting;
    public CreateOrderCreateSubscriptionTerms withRenewalSetting(CreateOrderCreateSubscriptionTermsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public CreateOrderCreateSubscriptionTerms withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}