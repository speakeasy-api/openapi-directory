package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreateApplicationJsonPlanAudio
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
public class AccountPlanCreateApplicationJsonPlanAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public String calloutCountries;
    public AccountPlanCreateApplicationJsonPlanAudio withCalloutCountries(String calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ddi_numbers")
    public Long ddiNumbers;
    public AccountPlanCreateApplicationJsonPlanAudio withDdiNumbers(Long ddiNumbers) {
        this.ddiNumbers = ddiNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium_countries")
    public String premiumCountries;
    public AccountPlanCreateApplicationJsonPlanAudio withPremiumCountries(String premiumCountries) {
        this.premiumCountries = premiumCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tollfree_countries")
    public String tollfreeCountries;
    public AccountPlanCreateApplicationJsonPlanAudio withTollfreeCountries(String tollfreeCountries) {
        this.tollfreeCountries = tollfreeCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreateApplicationJsonPlanAudio withType(String type) {
        this.type = type;
        return this;
    }
}