package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreate201ApplicationJsonPlanAudio
 * Additional audio conferencing <a href="https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans">plan type</a>.
**/
public class AccountPlanCreate201ApplicationJsonPlanAudio {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public String calloutCountries;
    public AccountPlanCreate201ApplicationJsonPlanAudio withCalloutCountries(String calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ddi_numbers")
    public Long ddiNumbers;
    public AccountPlanCreate201ApplicationJsonPlanAudio withDdiNumbers(Long ddiNumbers) {
        this.ddiNumbers = ddiNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium_countries")
    public String premiumCountries;
    public AccountPlanCreate201ApplicationJsonPlanAudio withPremiumCountries(String premiumCountries) {
        this.premiumCountries = premiumCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tollfree_countries")
    public String tollfreeCountries;
    public AccountPlanCreate201ApplicationJsonPlanAudio withTollfreeCountries(String tollfreeCountries) {
        this.tollfreeCountries = tollfreeCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreate201ApplicationJsonPlanAudio withType(String type) {
        this.type = type;
        return this;
    }
}