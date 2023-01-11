package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountPlanCreate201ApplicationJsonPhonePlanPlanBase
 * Additional phone base plans.
**/
public class AccountPlanCreate201ApplicationJsonPhonePlanPlanBase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callout_countries")
    public String calloutCountries;
    public AccountPlanCreate201ApplicationJsonPhonePlanPlanBase withCalloutCountries(String calloutCountries) {
        this.calloutCountries = calloutCountries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AccountPlanCreate201ApplicationJsonPhonePlanPlanBase withType(String type) {
        this.type = type;
        return this;
    }
}