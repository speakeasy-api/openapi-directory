package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlans200ApplicationJsonPlanAudio
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type.</a>
**/
public class AccountPlans200ApplicationJsonPlanAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public String calloutCountries;
    public AccountPlans200ApplicationJsonPlanAudio withCalloutCountries(String calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ddi_numbers")
    public Long ddiNumbers;
    public AccountPlans200ApplicationJsonPlanAudio withDdiNumbers(Long ddiNumbers) {
        this.ddiNumbers = ddiNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_invoice_date")
    public String nextInvoiceDate;
    public AccountPlans200ApplicationJsonPlanAudio withNextInvoiceDate(String nextInvoiceDate) {
        this.nextInvoiceDate = nextInvoiceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium_countries")
    public String premiumCountries;
    public AccountPlans200ApplicationJsonPlanAudio withPremiumCountries(String premiumCountries) {
        this.premiumCountries = premiumCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_effective_date")
    public String serviceEffectiveDate;
    public AccountPlans200ApplicationJsonPlanAudio withServiceEffectiveDate(String serviceEffectiveDate) {
        this.serviceEffectiveDate = serviceEffectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountPlans200ApplicationJsonPlanAudioStatusEnum status;
    public AccountPlans200ApplicationJsonPlanAudio withStatus(AccountPlans200ApplicationJsonPlanAudioStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tollfree_countries")
    public String tollfreeCountries;
    public AccountPlans200ApplicationJsonPlanAudio withTollfreeCountries(String tollfreeCountries) {
        this.tollfreeCountries = tollfreeCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlans200ApplicationJsonPlanAudio withType(String type) {
        this.type = type;
        return this;
    }
}