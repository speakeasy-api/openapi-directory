package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderTermsAndConditions
 * Information about an order action of type `TermsAndConditions`.
 * 
**/
public class CreateOrderTermsAndConditions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenew")
    public Boolean autoRenew;
    public CreateOrderTermsAndConditions withAutoRenew(Boolean autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastTerm")
    public LastTerm lastTerm;
    public CreateOrderTermsAndConditions withLastTerm(LastTerm lastTerm) {
        this.lastTerm = lastTerm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSetting")
    public CreateOrderTermsAndConditionsRenewalSettingEnum renewalSetting;
    public CreateOrderTermsAndConditions withRenewalSetting(CreateOrderTermsAndConditionsRenewalSettingEnum renewalSetting) {
        this.renewalSetting = renewalSetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTerms")
    public RenewalTerm[] renewalTerms;
    public CreateOrderTermsAndConditions withRenewalTerms(RenewalTerm[] renewalTerms) {
        this.renewalTerms = renewalTerms;
        return this;
    }
}