package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TermsAndConditions
 * Information about an order action of type `TermsAndConditions`.
 * 
**/
public class TermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public TermsAndConditions withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialTerm")
    public InitialTerm initialTerm;
    public TermsAndConditions withInitialTerm(InitialTerm initialTerm) {
        this.initialTerm = initialTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public TermsAndConditionsRenewalSettingEnum renewalSetting;
    public TermsAndConditions withRenewalSetting(TermsAndConditionsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public TermsAndConditions withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}